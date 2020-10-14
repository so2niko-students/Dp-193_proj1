export class FilterModel {
  data = [];

  url = 'http://localhost:8080/base/database.json';

  ignoredCategories = ['id', 'photoUrl', 'model', 'price', 'consumption'];

  fetchData = async () => {
    const response = await fetch(this.url);
    this.data = await response.json();
  };

  getData = () => this.data;

  getCategoriesData = (carsData) => Object.keys(carsData[0]).map((key) => {
    const propertyValues = carsData.map((car) => car[key]);

    return {
      name: key,
      values: [...new Set(propertyValues.flat(1))],
    };
  }).filter((category) => !this.ignoredCategories.includes(category.name));

  extractFormData = (event) => [...event.target.querySelectorAll('input')].reduce((selectedProperties, formElement) => {
    if (formElement.type !== 'submit') {
      if (formElement.type === 'checkbox') {
        if (formElement.checked) {
          return {
            ...selectedProperties,
            [formElement.dataset.category]: [
              ...selectedProperties[formElement.dataset.category] || [],
              formElement.name,
            ],
          };
        }
      } else {
        return {
          ...selectedProperties,
          [formElement.dataset.category]: [
            ...selectedProperties[formElement.dataset.category] || [],
            Number(formElement.value),
          ],
        };
      }
    }
    return selectedProperties;
  }, {});

  filterData = (carsData, filterParams) => carsData.filter((car) => {
    let flag = true;

    Object.keys(filterParams).forEach((key) => {
      if (Array.isArray(car[key])) {
        const arraysCrossing = car[key].filter((value) => filterParams[key].includes(value));

        if (!arraysCrossing.length) {
          flag = false;
        }
      } else if (typeof car[key] === 'string') {
        if (!filterParams[key].includes(car[key])) {
          flag = false;
        }
      } else if (typeof car[key] === 'number') {
        if (!(car[key] >= filterParams[key][0] && car[key] <= filterParams[key][1])) {
          flag = false;
        }
      }
    });
    return flag;
  })
}
