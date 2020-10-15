import eventNames from '../config/publisher-events.js';

export default class Publisher {
  events = {};

  eventNames = eventNames;

  subscribe = (eventName, callbackFn) => {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callbackFn);
  };

  unsubscribe = (eventName, callbackFn) => {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName] = this.events[eventName].filter((func) => func !== callbackFn);
  };

  notify = (eventName, data) => {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].forEach((func) => func(data));
  };

  methods = {
    notify: this.notify,
    subscribe: this.subscribe,
    unsubscribe: this.unsubscribe,
    events: this.eventNames,
  };
}
