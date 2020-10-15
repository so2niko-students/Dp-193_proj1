import ContactsModel from './contacts-model.js';
import ContactsView from './contacts-view.js';

export default class ContactsController {
  constructor({ subscribe, events }) {
    this.view = new ContactsView();
    this.model = new ContactsModel();

    this.subscribe = subscribe;
    this.events = events;

    this.subscribe(this.events.SHOW_CONTACTS, this.view.render);
    
    // this.onLoad();
  }

  // onLoad = () => {
  //   this.view.render();
  // };
}
