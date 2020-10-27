import { FormView } from './form-view.js';
import { FormModel } from './form-model.js';

export class FormController {
  constructor({ subscribe, events, notify }) {
    this.view = new FormView(this.handleSubmitForm);
    this.model = new FormModel();
    this.subscribe = subscribe;
    this.events = events;
    this.notify = notify;
    this.subscribe(this.events.ADD_ORDER, this.handleAccept);
  }

  handleAccept = async (carData) => {
    this.view.renderContainer();
    this.view.renderCarDetails(carData);
    this.model.setCarData(carData);
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    const customer  = this.model.getFormData(event);
    this.model.sendToBot(customer);

    this.view.document.location.reload();
  };
}
