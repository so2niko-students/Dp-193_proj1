import { FormView } from './confirm-form-view.js';
import { FormModel } from './confirm-form-model.js';

export class FormController {
  constructor({ subscribe, events }) {
    this.view = new FormView(this.handleSubmitForm);
    this.model = new FormModel();
    this.subscribe = subscribe;
    this.events = events;
    this.subscribe(this.events.ADD_ORDER, this.handleAccept);
  }

  handleAccept = async (carData) => {
    this.view.renderContainer();
    this.view.renderCarDetails(carData);
  };

  handleSubmitForm = (event, cardId) => {
    event.preventDefault();
    const { fullName, telephone } = this.model.getFormData(event);
    this.model.getCardData({ fullName, telephone }, cardId);
  };
}
