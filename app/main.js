import Publisher from './helpers/publisher.js';

import { HeaderController } from './components/header/header-controller.js';
import { ControllerCarsGallery } from './components/cars-gallery/controller-cars-gallery.js';
import './css/main.scss';

const publisher = new Publisher();

const headerController = new HeaderController(publisher.methods);
const carsGallery = new ControllerCarsGallery(publisher.methods);

