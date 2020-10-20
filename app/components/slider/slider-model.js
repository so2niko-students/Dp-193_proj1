export class SliderModel {
  data = [];

  randomCars = [];

  currentImageIndex = 0;

  slideInterval = 5;

  getCarId(id) {
    return this.randomCars.find((car) => car.id === id);
  }

  getCurrentCarId() {
    return this.randomCars[this.currentImageIndex].id;
  }

  getRandomCar = () => Math.floor(Math.random() * this.data.length);

  randomCarsFilter() {
    this.randomCars = [];
    for (let i = 0; i < 5; i += 1) {
      this.randomCars.push(this.data[this.getRandomCar()]);
    }
  }

  slideLeft() {
    if (this.currentImageIndex - 1 === -1) {
      this.currentImageIndex = this.randomCars.length - 1;
    } else {
      this.currentImageIndex -= 1;
    }
  }

  slideRight() {
    if (this.currentImageIndex + 1 === this.randomCars.length) {
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex += 1;
    }
  }
}