// Events

/**
 * Regular expression used to split event strings.
 */
export const EVENT_SPLITTER = /\s+/;

/**
 * Iterates over the standard `event, callback` (as well as the fancy multiple
 * space-separated events `"change blur", callback` and jQuery-style event
 * maps `{event: callback}`).
 * @param {function} iteratee Function to iterate
 * @param {object} events Event object
 * @param {string|object} name Name of event or events
 * @param {function} callback The function to call
 * @param {any} opts Any other params
 */
export const eventsApi = (iteratee, events, name, callback, ...opts) => {
  //console.debug("opts", opts);
  let i = 0, names;
  if (name && typeof name === "object") {
    // Handle event maps.
    if (callback !== void 0 && "context" in opts && opts.context === void 0) {
      opts.context = callback;
    }
    for (names = Object.keys(name); i < names.length; i++) {
      events = eventsApi(iteratee, events, names[i], name[names[i]], ...opts);
    }
  } else if (name && EVENT_SPLITTER.test(name)) {
    // Handle space-separated event names by delegating them individually.
    for (names = name.split(EVENT_SPLITTER); i < names.length; i++) {
      events = iteratee(events, names[i], callback, ...opts);
    }
  } else {
    // Finally, standard events.
    events = iteratee(events, name, callback, ...opts);
  }
  return events;
};

/**
 * Guard the `listening` argument from the public API.
 * @param {object} obj Object with events
 * @param {string|object} name Name of event or events
 * @param {function} callback The function to call
 * @param {object} context The context of 'this'
 * @param {array} listening Array of listeners
 */
export const internalOn = (obj, name, callback, context, listening) => {
  obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
    context: context,
    ctx: obj,
    listening: listening
  });

  if (listening) {
    const listeners = obj._listeners || (obj._listeners = {});
    listeners[listening.id] = listening;
  }
  return obj;
};

/**
 * The reducing API that adds a callback to the `events` object.
 * @param {object} events Event object
 * @param {string|object} name Name of event or events
 * @param {function} callback The function to call
 * @param {object} options Any options
 */
export const onApi = (events, name, callback, options) => {
  if (callback) {
    const handlers = events[name] || (events[name] = []);
    const context = options.context, ctx = options.ctx, listening = options.listening;
    if (listening) {
      listening.count++;
    }
    handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
  }
  return events;
};

/**
 * The reducing API that removes a callback from the `events` object.
 * @param {object} events Event object
 * @param {string|object} name Name of event or events
 * @param {function} callback The function to call
 * @param {object} options Any options
 */
export const offApi = (events, name, callback, options) => {
  if (!events) {
    return;
  }
  let i = 0, listening;
  const context = options.context, listeners = options.listeners;

  // Delete all events listeners and "drop" events.
  if (!name && !callback && !context) {
    const ids = Object.keys(listeners);
    for (; i < ids.length; i++) {
      listening = listeners[ids[i]];
      delete listeners[listening.id];
      delete listening.listeningTo[listening.objId];
    }
    return;
  }

  let names = name ? [name] : Object.keys(events);
  for (; i < names.length; i++) {
    name = names[i];
    const handlers = events[name];

    // Bail out if there are no events stored.
    if (!handlers) break;

    // Replace events if there are any remaining.  Otherwise, clean up.
    const remaining = [];
    let j = 0;
    for (j = 0; j < handlers.length; j++) {
      const handler = handlers[j];
      if (
        callback && callback !== handler.callback &&
          callback !== handler.callback._callback ||
            context && context !== handler.context
      ) {
        remaining.push(handler);
      } else {
        listening = handler.listening;
        if (listening && --listening.count === 0) {
          delete listeners[listening.id];
          delete listening.listeningTo[listening.objId];
        }
      }
    }

    // Update tail event if the list has any events.  Otherwise, clean up.
    if (remaining.length) {
      events[name] = remaining;
    } else {
      delete events[name];
    }
  }
  return events;
};

/**
 * Handles triggering the appropriate event callbacks.
 * @param {object} objEvents Event object
 * @param {string|object} name Name of event or events
 * @param {function} callback The function to call
 * @param {any} args Any other arguments
 */
export const triggerApi = (objEvents, name, callback, ...args) => {
  if (objEvents) {
    const events = objEvents[name];
    let allEvents = objEvents.all;
    if (events && allEvents) {
      allEvents = allEvents.slice();
    }
    if (events) {
      triggerEvents(events, ...args);
    }
    if (allEvents) {
      triggerEvents(allEvents, [name].concat(...args));
    }
  }
  return objEvents;
};

/**
 * Internal dispatch function for triggering events.
 * @param {array} events The events
 * @param {any} args Any otehr arguments
 */
export const triggerEvents = (events, ...args) => {
  //console.debug("triggerEvents", ...args);
  let ev, i = -1;
  const l = events.length;
  while (++i < l) (ev = events[i]).callback.apply(ev.ctx, ...args); return;
};
