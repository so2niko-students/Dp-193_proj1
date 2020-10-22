import { FormView } from './form-view.js';
import { FormModel } from './form-model.js';

export class FormController {
  constructor({ subscribe}) {
    this.view = new FormView(this.handleSubmitForm);
    this.model = new FormModel();

    this.subscribe = subscribe;
    //this.events = events;

    this.subscribe('ADD_ORDER', this.handleAccept)
  }


  handleAccept = async (cardId) => {
    const cardData = await this.model.getCardData(cardId);
    this.view.renderContainer();
    this.view.renderCarDetails(cardData);
  };

  handleSubmitForm = (event, cardId) => {
    event.preventDefault();
    //this.view.clearErrors();
    const { fullName, telephone } = this.model.getFormData(event);
    //this.notify(this.events.SEND_MASSAGE, { fullName, telephone } );
    this.model.getCardData({ fullName, telephone }, cardId);

    }
 
}
