import { CallView } from './call-view.js';
import { CallModel } from './call-model.js';

export class CallController {
  constructor() {
    this.model = new CallModel();
    this.view = new CallView(this.model.validation);

    this.loadCallMeForm();
  }

  loadCallMeForm = () => {
    this.view.renderCallMeForm();
  };

  handleFormSubmit = (phoneNumber) => {
    const result = this.model.validation(phoneNumber);
    // передать данные в функцию Вовы через свою модель
  };
}
