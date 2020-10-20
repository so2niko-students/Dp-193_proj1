export class ModelCarsGallery {
  link = '../../../base/database.json';
  cars = [];
  filteredCars = [];
  page = 1;
  size = 9;

  loadCars(handleLoadCars) {
    fetch(this.link)
      .then(req => req.json())
      .then(reqData => {
        this.cars = reqData;
        handleLoadCars(this.cars);
      });
  }

  getCar(id) {
    return this.cars.find(car => car.id == id);
  }

  getCarsPagin() {
    if(this.filteredCars.length !== 0) {
      return this.filteredCars.slice(0, this.page++ * this.size);
    } else {
      return this.cars.slice(0, this.page++ * this.size);
    }
  }

  getFilteredCars(cars) {
    this.filteredCars = cars;
    return this.filteredCars.slice(0, this.page++ * this.size);
  }

  clearFilteredCars = () => {
    this.page = 1;
    this.filteredCars.length = 0;
  };
}
