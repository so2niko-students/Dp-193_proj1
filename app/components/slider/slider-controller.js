import { SliderModel } from './slider-model.js';
import { SliderView } from './slider-view.js';

export class SliderController {
  constructor({ subscribe, notify, events }) {
    this.model = new SliderModel();
    this.view = new SliderView(this.sliderHandlers);

    this.subscribe = subscribe;
    this.notify = notify;
    this.events = events;

    this.subscribe(this.events.LOAD_DATA, this.handleLoadData);
  }

  autoPlayTimeoutInstance = null;

  handleLoadData = (data) => {
    this.model.data = data;
    this.handleLoadSliderWrapper();
  };

  handleLoadSliderWrapper = () => {
    this.view.renderWrapper();
    this.handleLoadSliderImages();
  };

  handleLoadSliderImages = () => {
    this.model.randomCarsFilter();
    const cars = this.model.randomCars;
    this.view.render(cars);

    this.view.updateVisibility({ id: this.model.getCurrentCarId(), isNeedToShow: true });
    this.initAutoPlay();
  };

  initAutoPlay = () => {
    if (this.autoPlayTimeoutInstance !== null) {
      clearInterval(this.autoPlayTimeoutInstance);
    }

    this.autoPlayTimeoutInstance = setInterval(() => {
      this.handleAutoPlay();
    }, this.model.slideInterval * 1000);
  };

  handleAutoPlay = () => {
    this.view.updateVisibility({ id: this.model.getCurrentCarId(), isNeedToShow: false });
    this.model.slideRight();
    this.view.updateVisibility({ id: this.model.getCurrentCarId(), isNeedToShow: true });
  };

  handleSlideLeft = () => {
    this.view.updateVisibility({ id: this.model.getCurrentCarId(), isNeedToShow: false });
    this.model.slideLeft();
    this.view.updateVisibility({ id: this.model.getCurrentCarId(), isNeedToShow: true });
    this.initAutoPlay();
  };

  handleSlideRight = () => {
    this.view.updateVisibility({ id: this.model.getCurrentCarId(), isNeedToShow: false });
    this.model.slideRight();
    this.view.updateVisibility({ id: this.model.getCurrentCarId(), isNeedToShow: true });
    this.initAutoPlay();
  };

    handleCarDetails = () => {

    };

  sliderHandlers = {
    handleSlideLeft: this.handleSlideLeft,
    handleSlideRight: this.handleSlideRight,
    handleCarDetails: this.handleCarDetails,
  };
}