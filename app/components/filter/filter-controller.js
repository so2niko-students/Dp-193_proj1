import { FilterView } from './filter-view.js';
import { FilterModel } from './filter-model.js';

export class FilterController {
  constructor() {
    this.view = new FilterView(this.handleSubmit);
    this.model = new FilterModel();

    this.handleLoad();
  }

  handleLoad = async () => {
    await this.model.fetchData();
    const carsData = this.model.getData();
    const categories = this.model.getCategoriesData(carsData);

    this.view.render(categories);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const filterParams = this.model.extractFormData(event);
    const carsData = this.model.getData();
    const filtered = this.model.filterData(carsData, filterParams);
    console.log(filterParams);
    console.log(filtered);
  };
}
