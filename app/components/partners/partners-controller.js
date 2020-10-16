import { PartnersView } from './partners-view.js';

export class PartnersController {
  constructor({ subscribe, events }) {
    this.view = new PartnersView();

    this.subscribe = subscribe;
    this.events = events;

    this.subscribe(this.events.SHOW_PARTNERS, this.view.render);
  }
}
