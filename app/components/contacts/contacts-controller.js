import { ContactsView } from './contacts-view.js';

export class ContactsController {
  constructor({ subscribe, events, notify }) {
    this.view = new ContactsView();

    this.subscribe = subscribe;
    this.events = events;

    this.subscribe(this.events.SHOW_CONTACTS, this.view.render);
  }
}