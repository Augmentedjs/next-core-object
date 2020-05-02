import { once, uniqueId } from "next-core-utilities";
import { eventsApi, internalOn, offApi, triggerApi } from "./events.js";

/**
 * Augmented Object
 * Base class for other classes to extend from<br/>
 * Supported options:<br/>
 * <ul>
 * <li>events - Event object</li>
 * </ul>
 * @param {object} options Object options
 */
class AugmentedObject {
  constructor(options) {
    if (!options) {
      options = {};
    }
    if (!this._options) {
      this._options = {};
    }
    Object.assign(this._options, options);

    if (options && options.events) {
      this._events = options.events;
    } else {
      this._events = {};
    }

    this._listeningTo = {};
    this._listenId = {};
    this._listeners = {};
  };

  /**
   * Initialize the object
   * @deprecated Use the Constructor
   * @returns {object} Returns this context
   */
  initialize(...args) {
    return this;
  };

  /**
   * The passed options
   * @property options
   */
  get options() {
    return this._options;
  };

  set options(options) {
    this._options = options;
  };

  /**
   * The Events
   * @property events
   */
  get events() {
    return this._events;
  };

  set events(events) {
    this._events = events;
  };

  /**
   * Trigger one or many events, firing all bound callbacks. Callbacks are
   * passed the same arguments as `trigger` is, apart from the event name
   * (unless you're listening on `"all"`, which will cause your callback to
   * receive the true name of the event as the first argument).
   * @param {string} name The name of the event
   * @param {any} args any number of additional arguments
   * @returns {object} Returns this context
   */
  trigger(name, ...args) {
    //console.log("events", this._events);
    //console.log("trigger: name", name);
    //console.log("trigger: args", args);
    if (this._events) {
      const argsA = (Array.isArray(args)) ? args : (Array.from(args));
      //console.log(`calling eventsApi(${triggerApi}, ${this._events}, ${name}, ${void 0}, ${argsA});`);
      eventsApi(triggerApi, this._events, name, void 0, argsA);
    }
    return this;
  };

  /**
   * Bind an event to only be triggered a single time. After the first time
   * the callback is invoked, its listener will be removed. If multiple events
   * are passed in using the space-separated syntax, the handler will fire
   * once for each event, not once for a combination of all events.
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   */
  once(name, callback, context) {
    // Map the event into a `{event: once}` object.
    const events = eventsApi(this._onceMap, {}, name, callback, this.off.bind(this));
    if (typeof name === "string" && context == null) {
      callback = void 0;
    }
    return this.on(events, callback, context);
  };

  /**
   * Remove one or many callbacks. If `context` is null, removes all
   * callbacks with that function. If `callback` is null, removes all
   * callbacks for the event. If `name` is null, removes all bound
   * callbacks for all events.
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   */
  off(name, callback, context) {
    if (this._events) {
      this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
      });
    }
    return this;
  };

  /**
   * Tell this object to stop listening to either specific events ... or
   * to every object it's currently listening to.
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   */
  stopListening(obj, name, callback) {
    const listeningTo = this._listeningTo;
    if (listeningTo) {
      const ids = obj ? [obj._listenId] : Object.keys(listeningTo);
      let i = 0;
      for (i = 0; i < ids.length; i++) {
        const listening = listeningTo[ids[i]];

        // If listening doesn't exist, this object is not currently
        // listening to obj. Break out early.
        if (!listening) {
          break;
        }
        listening.obj.off(name, callback, this);
      }
    }
    return this;
  };

  /**
   * Bind an event to a `callback` function. Passing `"all"` will bind
   * the callback to all events fired.
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   */
  on(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  /**
   * Inversion-of-control versions of `on`. Tell *this* object to listen to
   * an event in another object... keeping track of what it's listening to
   * for easier unbinding later.
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   */
  listenTo(obj, name, callback) {
    if (obj) {
      const id = obj._listenId || (obj._listenId = uniqueId("l"));
      const listeningTo = this._listeningTo || (this._listeningTo = {});
      let listening = listeningTo[id];

      // This object is not listening to any other events on `obj` yet.
      // Setup the necessary references to track the listening callbacks.
      if (!listening) {
        const thisId = this._listenId || (this._listenId = uniqueId("l"));
        listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
      }

      // Bind callbacks on obj, and keep track of them on listening.
      internalOn(obj, name, callback, this, listening);
    }
    return this;
  };

  /**
   * Inversion-of-control versions of `once`.
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   */
  listenToOnce(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    const events = eventsApi(this._onceMap, {}, name, callback, this.stopListening.bind(this, obj));
    return this.listenTo(obj, events);
  };

  /**
   * Reduces the event callbacks into a map of `{event: onceWrapper}`.
   * `offer` unbinds the `onceWrapper` after it has been called.
   * @private
   */
  _onceMap(map, name, callback, offer) {
    if (callback) {
      const __once = map[name] = once(() => {
        offer(name, __once);
        callback.apply(this, arguments);
      });
      __once._callback = callback;
    }
    return map;
  };
};

export default AugmentedObject;
