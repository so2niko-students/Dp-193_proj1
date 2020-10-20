export class ModelDetails {
  car = {};
    
  setValue = (values) => {
    this.car.transmission = values.transmission;
    this.car.color = values.color
  };
}