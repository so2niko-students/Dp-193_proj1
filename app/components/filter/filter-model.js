export class FilterModel {
  data = [];

  ignoredCategories = ['id', 'photoUrl', 'model'];

  setData = (data) => {
    this.data = data;
  };

  getData = () => this.data;

  getCategoriesData = (carsData) => Object.keys(carsData[0]).map((key) => {
    const propertyValues = carsData.map((car) => car[key]);

    return {
      name: key,
      values: [...new Set(propertyValues.flat(1))],
    };
  }).filter((category) => !this.ignoredCategories.includes(category.name));

  extractFormData = (inputs) => inputs.reduce((selectedProperties, formInput) => {
    if (formInput.type === 'checkbox' && formInput.checked) {
      return {
        ...selectedProperties,
        [formInput.dataset.category]: [
          ...selectedProperties[formInput.dataset.category] ?? [],
          formInput.name,
        ],
      };
    } else if (formInput.type === 'number') {
      return {
        ...selectedProperties,
        [formInput.dataset.category]: [
          ...selectedProperties[formInput.dataset.category] ?? [],
          Number(formInput.value),
        ],
      };
    } else {
      return selectedProperties;
    }
  }, {});

  filterData = (carsData, filterParams) => carsData
    .filter((car) => Object.keys(filterParams).reduce((isProper, key) => {
      let flag = isProper;

      if (Array.isArray(car[key]) && !this.getArraysCrossingLength(car[key], filterParams[key])) {
        flag = false;
      } else if (typeof car[key] === 'string' && !filterParams[key].includes(car[key])) {
        flag = false;
      } else if (typeof car[key] === 'number' && !(car[key] >= filterParams[key][0] && car[key] <= filterParams[key][1])) {
        flag = false;
      }
      return flag;
    }, true));

  getArraysCrossingLength = (carParam, filterParam) => carParam
    .filter((value) => filterParam.includes(value)).length;

  formatName = (name, splitter) => name.split(splitter).map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(' ');
}
