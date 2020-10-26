export class ModelDetails {
  newCar = null;

  setCar(car) {
    this.newCar = { ...car };
  }

  setValue = (values) => {
    this.newCar = {
      ...this.newCar,
      ...values,
    };
  };
}
