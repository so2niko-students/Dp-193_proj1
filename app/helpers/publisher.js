export class Publisher {
  constructor(){
    this.subscribers = {};
  };

  subscribe = (event, callbackFn) => {
    !this.subscribers[event] ? this.subscribers[event] = [] : this.subscribers[event];
    this.subscribers[event].push(callbackFn);
  };

  unsubscribe = (event, callbackFn) => {
    !this.subscribers[event] ? this.subscribers[event] = [] : this.subscribers[event];
    this.subscribers[event] = this.subscribers[event].filter(func => func !== callbackFn);
  };

  notify = (event, data) => {
    !this.subscribers[event] ? this.subscribers[event] = [] : this.subscribers[event];
    this.subscribers[event].forEach(func => func(data));
  };

  getMethods = () => ({
    subscribe: this.subscribe,
    unsubscribe: this.unsubscribe,
    notify: this.notify
  });
}
