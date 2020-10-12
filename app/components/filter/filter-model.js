export class FilterModel {
  url = 'http://www.json-generator.com/api/json/get/ctRVcUtcfC?indent=2';

  getData = async () => {
    const response = await fetch(this.url);

    return response.json();
  };

  getCategoriesData = (carsData) => {
    const ignoredCategories = ['id', 'photoUrl'];

    return Object.keys(carsData[0]).reduce((categories, key) => {
      if (!ignoredCategories.includes(key)) {
        const propertyValues = carsData.map((car) => car[key]);
        const uniqueValues = [...new Set(propertyValues)];

        return {
          ...categories,
          [key]: Array.isArray(uniqueValues) ? [...new Set(uniqueValues.flat(1))] : uniqueValues
        };
      } else {
        return categories;
      }
    }, {});
  };

  filterData = (cardData, filterParams) => {
    return cardData.filter((car) => {

      return Object.keys(filterParams).reduce((filterResult, key) => {
        if (Array.isArray(car[key])) {
          const combinedValues = [...filterParams[key], ...car[key]];
          const uniqueValues = [...new Set(combinedValues)];

          if (uniqueValues.length === combinedValues.length) {
            return false;
          }
        } else if (typeof filterParams[key][0] === 'string') {
            console.log('string', filterParams[key][0]);
            if (!filterParams[key].includes(car[key])) {
              return false
            }
        } else if (typeof filterParams[key][0] === 'number') {
          console.log('number', filterParams[key][0]);
          return false;
        }
        return true;
      }, true);

      // for (const key in filterParams) {
      //   if (filterParams.hasOwnProperty(key)) {
      //     if (Array.isArray(car[key])) {
      //       const combinedValues = [...filterParams[key], ...car[key]];
      //       const uniqueValues = [...new Set(combinedValues)];
      //
      //       if (uniqueValues.length === combinedValues.length) {
      //         return false;
      //       }
      //     } else if (!filterParams[key].includes(car[key])) {
      //       return false
      //     }
      //   }
      // }
      // return true;
    });
  };
}
