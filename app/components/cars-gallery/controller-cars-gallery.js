import { ModelCarsGallery } from './model-cars-gallery.js';
import { ViewCarsGallery } from './view-cars-gallery.js';

export class ControllerCarsGallery {
  constructor({notify, events, subscribe}) {
    this.model = new ModelCarsGallery();
    this.view = new ViewCarsGallery(this.getMethods);

    this.notify = notify;
    this.events = events;
    this.subscribe = subscribe;

    this.subscribe(this.events.SEARCH_MODEL, this.handleFilteredData);
    this.subscribe(this.events.FILTERED_DATA, this.handleFilteredData);
    this.subscribe(this.events.LOGO_SHOWCARS, this.handleLoadCars); 
    
    this.model.loadCars(this.handleLoadCars);
  }

  handleLoadCars = (cars) => {                          
    this.notify(this.events.LOAD_DATA, cars);
    this.clearFilteredData();
    this.view.renderStructure();  
    this.handleLoadMore();                     
  };

  handleLoadMore = () => {
    const carsPag = this.model.getCarsPagin();  
    this.view.render(carsPag);
  };

  handleFilteredData = (data) => {
    this.model.page = 1;                          
    const cars = this.model.getFilteredCars(data);
    this.view.render(cars);
  };

  handleCarDetails = (event) => {                       
    const carId = event.target.dataset.id;
    if(carId) {
      const car = this.model.getCar(carId);
      this.notify(this.events.CAR_DETAILS, car);
    }
  };

  handleFilterButton = () => {
    this.notify(this.events.SHOW_FILTER);        
  };

  handleShowAll = () => {                 
    this.clearFilteredData();                       
    const cars = this.model.getCarsPagin();
    this.view.render(cars);
  };
  
  clearFilteredData = () => {
    this.model.page = 1;
    this.model.filteredCars.length = 0;
  };
  
  getMethods = {
    handleFilterButton: this.handleFilterButton,
    handleShowAll: this.handleShowAll,
    handleCarDetails: this.handleCarDetails,
    handleLoadMore: this.handleLoadMore,
  }
}
