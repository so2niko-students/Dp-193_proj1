export default class ViewCarsGallery {
  
  container = document.querySelector('.cars-gallery');
  
  render = (data) => {
    const cars = data.filter(car => car.id < 10);
    const carsGallery = cars.map(car => `
      <div class="cars-gallery__wrapper" data-id="${car.id}">
        <img class="cars-gallery__img" src="${car.photoUrl[0]}"></img>
        <h2 class="cars-gallery__brand">${car.brand}</h2>
        <h3 class="cars-gallery__model">${car.model}</h3>
        <p class="cars-gallery__price">от $${car.price}</p>
        <button class="cars-gallery__btn-popup " type="button">More information</button>
      </div>
    `);
    
    this.container.innerHTML = carsGallery.join('');
  }
}
