import { PartnersView } from './partners-view.js';
import { PartnersModel } from './partners-model.js';


export class PartnersController {
  constructor({ subscribe, events }) {
    this.model = new PartnersModel();
    this.view = new PartnersView(this.model.getArrayOfLinks());

    this.subscribe = subscribe;
    this.events = events;

    this.subscribe(this.events.SHOW_PARTNERS, this.view.render);

  }
}
