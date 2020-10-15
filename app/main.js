import '../cars-gallery.scss';

import ControllerCarsGallery from './components/cars-gallery/controller-cars-gallery.js';
import Publisher from './helpers/publisher.js';

const publisher = new Publisher();
const carsGallery = new ControllerCarsGallery(publisher.methods);


