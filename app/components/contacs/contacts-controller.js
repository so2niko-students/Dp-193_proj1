// eslint-disable-next-line import/extensions
import { ContactsModel } from './contacts-model.js';
// eslint-disable-next-line import/extensions
import { ContactsView } from './contacts-view.js';

export class ContactsController {
  constructor({ subscribe, unsubscribe, notify }) {
    this.view = new ContactsView();
    this.model = new ContactsModel();

    this.subscribe = subscribe;
    this.unsubscribe = unsubscribe;
    this.notify = notify;

    this.onLoad();
  }

  onLoad = () => {
    const title = this.model.getTitle();

    this.view.render(title);
  };
}
