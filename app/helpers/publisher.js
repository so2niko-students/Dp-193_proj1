import eventNames from '../config/publisher-events.js'

export default class Publisher{
    events = {};
    eventNames = eventNames;

    subscribe = (eventName, func) => {
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }

        this.events[eventName].push(func);
    };

    notify = (eventName, data) => {
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }

        this.events[eventName].forEach(func => func(data));
    };

    methods = {
        notify      : this.notify,
        subscribe   : this.subscribe,
        events      : this.eventNames
    }

};