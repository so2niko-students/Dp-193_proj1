export class HeaderModel {
    data = [];

    filteredData = [];

    filterByModel = (modelName) => {
      const model = modelName.toUpperCase();
      this.filteredData = this.data.filter((car) => car.model.toUpperCase().includes(model));
      return this.filteredData;
    };
}