export default class ModelCarsGallery {
  cars = [];
  page = 1;
  size = 9;

  loadCars(handleLoad) {
    fetch('../../../base/database.json')
      .then(req => req.json())
      .then(reqData => {
        this.cars = reqData;
        handleLoad(this.cars);
      });
  }

  getCar(id) {
    return this.cars.find(car => car.id == id);
  }

  getCarsPagin(){
    return this.cars.slice(0, this.page++ * this.size);
  }
}
