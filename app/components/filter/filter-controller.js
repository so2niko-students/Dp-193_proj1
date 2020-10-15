import { FilterView } from './filter-view.js';
import { FilterModel } from './filter-model.js';

export class FilterController {
  constructor({ subscribe, notify, events }) {
    this.model = new FilterModel();
    this.view = new FilterView(this.handleSubmit, this.model.formatName);

    this.subscribe = subscribe;
    this.notify = notify;
    this.events = events;

    this.subscribe(this.events.LOAD_DATA, this.handleLoad);
    this.subscribe(this.events.SHOW_FILTER, this.view.showFilter);
  }

  handleLoad = (carsData) => {
    this.model.setData(carsData);

    const categories = this.model.getCategoriesData(carsData);

    this.view.render(categories);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const filterParams = this.model.extractFormData(event);
    const carsData = this.model.getData();
    const filteredData = this.model.filterData(carsData, filterParams);

    this.view.hideFilter();
    this.notify(this.events.FILTERED_DATA, filteredData);
  };
}
