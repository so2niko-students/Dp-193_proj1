import './slider.scss';

export class SliderView {
  sliderContainer = document.querySelector('.main');

  constructor({ handleSlideLeft, handleSlideRight, handleCarDetails }) {
    this.handleSlideLeft = handleSlideLeft;
    this.handleSlideRight = handleSlideRight;
    this.handleCarDetails = handleCarDetails;
  }

  renderWrapper() {
    this.sliderContainer.insertAdjacentHTML('afterbegin', `
      <div class='container-fluid slider'>        
          <div class='slider-image'>

          </div>                 
          <button class='btn slider-left-btn'>&#10094</button>
          <button class='btn slider-right-btn'>&#10095</button>        
      </div>
    `);
    this.sliderEvents();
  }

  render = (cars) => {
    this.sliderImage.innerHTML = cars.map(this.renderImg).join(' ');
  };

  renderImg = ({ id, photoUrl }) => `
      <img src='${photoUrl[0]}' class='image opacity-0' data-id='${id}'>
    `;

  updateVisibility = ({ id, isNeedToShow }) => {
    const imageBlock = document.querySelector(`.image[data-id='${id}']`);
    if (isNeedToShow) {
      imageBlock.classList.remove('opacity-0');
    } else {
      imageBlock.classList.add('opacity-0');
    }
  };

  sliderEvents = () => {
    const slideLeft = document.querySelector('.slider-left-btn');
    slideLeft.addEventListener('click', this.handleSlideLeft);

    const slideRight = document.querySelector('.slider-right-btn');
    slideRight.addEventListener('click', this.handleSlideRight);

    this.sliderImage = document.querySelector('.slider-image');
    this.sliderImage.addEventListener('click', this.handleCarDetails);
  };
}