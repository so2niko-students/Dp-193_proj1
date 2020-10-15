// eslint-disable-next-line import/extensions
import PartnersModel from './partners-model.js';
// eslint-disable-next-line import/extensions
import PartnersView from './partners-view.js';

export default class PartnersController {
  constructor({ subscribe, events }) {
    this.view = new PartnersView();
    this.model = new PartnersModel();

    this.subscribe = subscribe;
    this.events = events;

    this.subscribe(this.events.SHOW_PARTNERS, this.view.render);

    this.onLoad();
  }

  onLoad = () => {
    this.view.render();
  };
}
