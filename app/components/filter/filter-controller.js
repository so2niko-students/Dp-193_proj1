import { FilterView } from './filter-view.js';
import { FilterModel } from './filter-model.js';

export class FilterController {
  constructor() {
    this.view = new FilterView();
    this.model = new FilterModel();

    this.handleLoad();
  }

  handleLoad = async () => {
    const carsData = await this.model.getData();

    console.log(this.model.getCategoriesData(carsData));

    // const filters = {
    //   color: ['black'],
    //   class: ['J', 'S'],
    //   'body-type': ['SUV'],
    //   'engine-capacity': [2000, 3000]
    // };
    //
    // const filteredData = this.model.filterData(carsData, filters);
    //
    // console.log(filteredData);
  };
}
