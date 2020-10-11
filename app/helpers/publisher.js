export class Publisher {
  constructor() {
    this.subscribers = {};
  }

  subscribe = (event, callbackFn) => {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callbackFn);
  };

  unsubscribe = (event, callbackFn) => {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event] = this.subscribers[event].filter((func) => func !== callbackFn);
  };

  notify = (event, data) => {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].forEach((func) => func(data));
  };

  getMethods = () => ({
    subscribe: this.subscribe,
    unsubscribe: this.unsubscribe,
    notify: this.notify,
  });
}
