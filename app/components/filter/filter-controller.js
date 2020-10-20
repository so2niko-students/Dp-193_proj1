import { FilterView } from './filter-view.js';
import { FilterModel } from './filter-model.js';

export class FilterController {
  constructor({ subscribe, unsubscribe, notify, events }) {
    this.model = new FilterModel();
    this.view = new FilterView(this.handleSubmit, this.model.formatName);

    this.subscribe = subscribe;
    this.unsubscribe = unsubscribe;
    this.notify = notify;
    this.events = events;

    this.subscribe(this.events.LOAD_DATA, this.handleLoadData);
    this.subscribe(this.events.SHOW_FILTER, this.view.showFilter);
    this.subscribe(this.events.RESET_DATA, this.view.resetFormInputs);
  }

  handleLoadData = (carsData) => {
    this.model.setData(carsData);

    const categories = this.model.getCategoriesData(carsData);

    this.view.render(categories);
    this.unsubscribe(this.events.LOAD_DATA, this.handleLoadData);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const inputs = this.view.getInputs();
    const filterParams = this.model.extractFormData(inputs);
    const carsData = this.model.getData();
    const filteredData = this.model.filterData(carsData, filterParams);

    this.view.hideFilter();
    this.notify(this.events.FILTERED_DATA, filteredData);
  };
}
