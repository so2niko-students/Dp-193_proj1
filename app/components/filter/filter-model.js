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

  extractFormData = (inputs) => inputs.reduce((selectedProperties, formElement) => {
    if (formElement.type === 'checkbox' && formElement.checked) {
      return {
        ...selectedProperties,
        [formElement.dataset.category]: [
          ...selectedProperties[formElement.dataset.category] ?? [],
          formElement.name,
        ],
      };
    } else if (formElement.type === 'number') {
      return {
        ...selectedProperties,
        [formElement.dataset.category]: [
          ...selectedProperties[formElement.dataset.category] ?? [],
          Number(formElement.value),
        ],
      };
    } else {
      return selectedProperties;
    }
  }, {});

  filterData = (carsData, filterParams) => carsData
    .filter((car) => Object.keys(filterParams).reduce((isProper, key) => {
      if (Array.isArray(car[key])) {
        const arraysCrossing = car[key].filter((value) => filterParams[key].includes(value));

        if (!arraysCrossing.length) {
          return false;
        }
      } else if (typeof car[key] === 'string') {
        if (!filterParams[key].includes(car[key])) {
          return false;
        }
      } else if (typeof car[key] === 'number') {
        if (!(car[key] >= filterParams[key][0] && car[key] <= filterParams[key][1])) {
          return false;
        }
      }
      return isProper;
    }, true));

  formatName = (name, splitter) => name.split(splitter).map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(' ');
}
