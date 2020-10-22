import { ModelDetails } from './model-car-details.js';
import { ViewDetails } from './view-car-details.js';

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
    this.model.car = car;
    this.model.setCar(car);
    this.view.renderCarCard(car);
    this.view.openPopup();
  };

  handleAddToOrder = () => {
    const data = this.view.getValues();
    this.model.setValue(data);
    const car = this.model.newCar;
    console.log(car);
    this.notify(this.events.ADD_ORDER, car);
    this.view.hideCard();
  };




}
