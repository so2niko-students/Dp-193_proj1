import { ContactsView } from './contacts-view.js';

export class ContactsController {
  constructor({ subscribe, events, notify }) {
    this.view = new ContactsView(this.getMethods());

    this.subscribe = subscribe;
    this.events = events;
    this.notify = notify;

    this.subscribe(this.events.SHOW_CONTACTS, this.view.render);
  }

  handleCallBack = () => {
    this.notify(this.events.SHOW_CONTACTS);
  };

  getMethods = () => ({
    showCallBack: this.handleCallBack,
  });
}
