import './cars-gallery.scss';

export class ViewCarsGallery {
  mainContainer = document.querySelector('.main');

  constructor(handleSort, handleShowAll, handleCarDetails, handleLoadMore) {
    this.handleSort = handleSort;
    this.handleShowAll = handleShowAll;
    this.handleCarDetails = handleCarDetails;
    this.handleLoadMore = handleLoadMore;
  }
  
  renderStructure(){
    this.mainContainer.insertAdjacentHTML('beforeend', `
    <div class="container-filter pt-5 d-flex justify-content-center">
      <div class="container-filter__showall">
        <span style="cursor: default;">Category</span>
        <button type="button" class="container-filter__showall-btn border-0 text-primary">ALL</button>
      </div>
      <div class="container-filter__sort">
        <button type="button" class="container-filter__sort-btn">Filter</button>
      </div>
    </div>
    <div class="cars-gallery d-flex justify-content-around flex-wrap text-center">
        
    </div>
    <div class="container-loadmore mx-auto mt-5">
      <button type="button" class="container-loadmore__btn load-more w-100 border-0">Load more...</button>
    </div>
    
  `);
    this.addEvents();
  }

  render = (data) => {
    const cars = data.map(car => `
      <div class="cars-gallery__car">
        <img class="cars-gallery__car-img" src="${car.photoUrl[0]}"></img>
        <h2 class="cars-gallery__car-brand pt-3 h2 font-weight-bold">${car.brand}</h2>
        <span class="cars-gallery__car-model">${car.model}</span>
        <p class="cars-gallery__car-price">from <b>$${car.price}</b></p>
        <button class="cars-gallery__car-details-btn border-0 text-primary" type="button" data-id="${car.id}">More information</button>
      </div>
    `);
    this.carsGallery.innerHTML = cars.join('');
  }

  addEvents = () => {
    const buttonFilter = document.querySelector('.container-filter__sort-btn');
    buttonFilter.addEventListener('click', this.handleSort );

    const buttonAll = document.querySelector('.container-filter__showall-btn');
    buttonAll.addEventListener('click', this.handleShowAll);

    const buttonLoadMore = document.querySelector('.container-loadmore');
    buttonLoadMore.addEventListener('click', this.handleLoadMore);

    this.carsGallery = document.querySelector('.cars-gallery');
    this.carsGallery.addEventListener('click', this.handleCarDetails);
  }
}
