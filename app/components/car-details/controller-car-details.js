import ModelDetails from "./model-car-details.js";
import ViewDetails from "./view-car-details.js";

export default class ControllerDetails{
    constructor({ subscribe, events, notify }){
        this.view = new ViewDetails(this.handleAddToOrder);
        this.model = new ModelDetails();

        subscribe(events.ADD_DETAILS, this.handleAddDetails);

        this.notify = notify;
        this.showDetails();
    }

    handleAddDetails = car => {
        this.model.addDetails(car);

        this.showDetails();
    }

    showDetails(){
        const details = this.model.getDetails();
        this.view.renderDetails(details);
        console.log(details)
    }

    handleAddToOrder = (ev) => {
        const id = ev.target.dataset.carId;
        console.log(id);
        if(id){
            const car = this.model.getDetails(id);
            this.notify(this.events.ADD_ORDER, car);
        }
    };
}
