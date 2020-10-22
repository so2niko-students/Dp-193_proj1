export class ModelDetails {
  car = {};

  newCar = null;

  setCar(car) {
   this.newCar = Object.assign({}, car);
  }

  setValue = (values) => {
    this.newCar = {
      ...this.newCar,
      ...values,
    };
  };
}

