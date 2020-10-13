export default class ModelCarsGallery {
  cars = [];

  loadCars(handleLoad) {
    fetch('../../../base/database.json')
      .then(req => req.json())
      .then(reqData => {
        this.cars = reqData;
        handleLoad(this.cars)
      })
  }
}
