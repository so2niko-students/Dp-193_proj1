// eslint-disable-next-line import/extensions
import { PartnersModel } from './partners-model.js';
// eslint-disable-next-line import/extensions
import { PartnersView } from './partners-view.js';

export class PartnersController {
  constructor({ subscribe, unsubscribe, notify }) {
    this.view = new PartnersView();
    this.model = new PartnersModel();

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
