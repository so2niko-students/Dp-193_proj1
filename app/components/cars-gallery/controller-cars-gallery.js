import ModelCarsGallery from './model-cars-gallery.js';
import ViewCarsGallery from './view-cars-gallery.js';

export default class ControllerCarsGallery {
  constructor({notify, events, subscribe}) {
    this.model = new ModelCarsGallery();
    this.view = new ViewCarsGallery();

    this.notify = notify;
    this.events = events;
    this.subscribe = subscribe;

    subscribe(this.events.SEARCH_MODEL, this.handleSearch)
    subscribe(this.events.FILTER, this.handleFilter)
    this.model.loadCars(this.handleLoadCars);

    
  }

  handleLoadCars = cars => {
    this.notify(this.events.LOAD_DATA, cars);      
    this.view.render(cars)                         
  }

  handleSearch = (data) => {                       
    this.view.render(data)                         
  }

  handleFilter = (data) => {                       
    this.view.render(data)
    this.notify(this.events.FILTER, data)          
  }
}
