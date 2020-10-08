export class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe = (callbackFn) => this.observers.push(callbackFn);

  unsubscribe = (callbackFn) => {
    this.observers = this.observers.filter((subscriber) => subscriber !== callbackFn);
  };

  broadcast = (data) => this.observers.forEach((subscriber) => subscriber(data));

  getMethods = () => ({
    subscribe: this.subscribe,
    unsubscribe: this.unsubscribe,
    broadcast: this.broadcast
  });
}

