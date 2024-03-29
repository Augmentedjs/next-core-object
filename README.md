# next-core-object

Augmented.js Next Core - Object and Events

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [AugmentedObject](#augmentedobject)
    *   [Parameters](#parameters)
    *   [initialize](#initialize)
        *   [Parameters](#parameters-1)
    *   [options](#options)
    *   [events](#events)
    *   [trigger](#trigger)
        *   [Parameters](#parameters-2)
    *   [once](#once)
        *   [Parameters](#parameters-3)
    *   [off](#off)
        *   [Parameters](#parameters-4)
    *   [stopListening](#stoplistening)
        *   [Parameters](#parameters-5)
    *   [on](#on)
        *   [Parameters](#parameters-6)
    *   [listenTo](#listento)
        *   [Parameters](#parameters-7)
    *   [listenToOnce](#listentoonce)
        *   [Parameters](#parameters-8)
*   [Configuration](#configuration)
    *   [Properties](#properties)
*   [EVENT_SPLITTER](#event_splitter)
*   [eventsApi](#eventsapi)
    *   [Parameters](#parameters-9)
*   [internalOn](#internalon)
    *   [Parameters](#parameters-10)
*   [onApi](#onapi)
    *   [Parameters](#parameters-11)
*   [offApi](#offapi)
    *   [Parameters](#parameters-12)
*   [triggerApi](#triggerapi)
    *   [Parameters](#parameters-13)
*   [triggerEvents](#triggerevents)
    *   [Parameters](#parameters-14)

## AugmentedObject

Augmented Object
Base class for other classes to extend from<br/>
Supported options:<br/>

<ul>
<li>events - Event object</li>
</ul>

### Parameters

*   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object options

### initialize

Initialize the object

#### Parameters

*   `args` **...any** 

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Returns this context

**Meta**

*   **deprecated**: Use the Constructor

### options

The passed options

### events

The Events

### trigger

Trigger one or many events, firing all bound callbacks. Callbacks are
passed the same arguments as `trigger` is, apart from the event name
(unless you're listening on `"all"`, which will cause your callback to
receive the true name of the event as the first argument).

#### Parameters

*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the event
*   `args` **any** any number of additional arguments

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Returns this context

### once

Bind an event to only be triggered a single time. After the first time
the callback is invoked, its listener will be removed. If multiple events
are passed in using the space-separated syntax, the handler will fire
once for each event, not once for a combination of all events.

#### Parameters

*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the event
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The callback to evoke
*   `context` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The context of the callback

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Returns this context

### off

Remove one or many callbacks. If `context` is null, removes all
callbacks with that function. If `callback` is null, removes all
callbacks for the event. If `name` is null, removes all bound
callbacks for all events.

#### Parameters

*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the event
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The callback to evoke
*   `context` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The context of the callback

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Returns this context

### stopListening

Tell this object to stop listening to either specific events ... or
to every object it's currently listening to.

#### Parameters

*   `obj` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The object to stop listening to
*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the event
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The callback to evoke

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Returns this context

### on

Bind an event to a `callback` function. Passing `"all"` will bind
the callback to all events fired.

#### Parameters

*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the event
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The callback to evoke
*   `context` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The context of the callback

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Returns this context

### listenTo

Inversion-of-control versions of `on`. Tell *this* object to listen to
an event in another object... keeping track of what it's listening to
for easier unbinding later.

#### Parameters

*   `obj` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The object to listening to
*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the event
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The callback to evoke

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Returns this context

### listenToOnce

Inversion-of-control versions of `once`.

#### Parameters

*   `obj` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The object to stop listening to
*   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the event
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The callback to evoke

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Returns this context

## Configuration

A set of configuration properties for the framework

### Properties

*   `LoggerLevel` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The level of the framework internal logger
*   `MessageBundle` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the base name for messages in the framework (default: Messages)
*   `AsynchronousQueueTimeout` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the default milisecond timeout (default: 2000)
*   `ApplicationInitProcessTimeout` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the application init even timeout (default: 1000)

## EVENT_SPLITTER

Regular expression used to split event strings.

## eventsApi

Iterates over the standard `event, callback` (as well as the fancy multiple
space-separated events `"change blur", callback` and jQuery-style event
maps `{event: callback}`).

### Parameters

*   `iteratee` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function to iterate
*   `events` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Event object
*   `name` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** Name of event or events
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The function to call
*   `opts` **any** Any other params

## internalOn

Guard the `listening` argument from the public API.

### Parameters

*   `obj` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object with events
*   `name` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** Name of event or events
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The function to call
*   `context` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The context of 'this'
*   `listening` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array of listeners

## onApi

The reducing API that adds a callback to the `events` object.

### Parameters

*   `events` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Event object
*   `name` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** Name of event or events
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The function to call
*   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options

## offApi

The reducing API that removes a callback from the `events` object.

### Parameters

*   `events` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Event object
*   `name` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** Name of event or events
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The function to call
*   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options

## triggerApi

Handles triggering the appropriate event callbacks.

### Parameters

*   `objEvents` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Event object
*   `name` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** Name of event or events
*   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The function to call
*   `args` **any** Any other arguments

## triggerEvents

Internal dispatch function for triggering events.

### Parameters

*   `events` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The events
*   `args` **any** Any otehr arguments
