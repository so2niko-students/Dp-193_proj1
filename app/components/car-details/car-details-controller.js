import { ModelDetails } from './car-details-model.js';
import { ViewDetails } from './car-details-view.js';

export class ControllerDetails {
  constructor({ subscribe, events, notify }) {
    this.model = new ModelDetails();
    this.view = new ViewDetails(this.handleAddToOrder);

    this.subscribe = subscribe;
    this.notify = notify;
    this.events = events;

    this.subscribe(this.events.CAR_DETAILS, this.showCar);
  }

  showCar = (car) => {
    this.model.setCar(car);
    this.view.renderCarCard(car);
    this.view.openPopup();
  };

  handleAddToOrder = () => {
    const data = this.view.getValues();
    this.model.setValue(data);
    const car = this.model.newCar;
    this.notify(this.events.ADD_ORDER, car);
    this.view.hideCard();
  };
}
