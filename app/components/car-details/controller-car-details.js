import { ModelDetails } from "./model-car-details.js";
import { ViewDetails } from "./view-car-details.js";

export class ControllerDetails {
  constructor({ subscribe, events, notify }) {
    this.view = new ViewDetails(this.handleAddToOrder);
    this.model = new ModelDetails();

    this.subscribe = subscribe;
    this.notify = notify;
    this.events = events

    this.subscribe(this.events.CAR_DETAILS, this.showCar);
  }

  showCar = car => {
    this.model.car = car;
    this.view.renderCarCard(car);
    this.view.openPopup();
  };

  handleAddToOrder = () => {
    const values = this.view.getValue();
    this.model.setValue(values);
    const car = this.model.car
    this.notify(this.events.ADD_ORDER, car);
  }
}
