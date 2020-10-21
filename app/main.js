import Publisher from './helpers/publisher.js';

import { ControllerCarsGallery } from './components/cars-gallery/controller-cars-gallery.js';
import { FilterController } from './components/filter/filter-controller.js';
import { HeaderController } from './components/header/header-controller.js';
import { FormController } from './components/header/form-controller.js';

import './css/main.scss';

const publisher = new Publisher();
const carsGallery = new ControllerCarsGallery(publisher.methods);
const headerController = new HeaderController(publisher.methods);
const filterController = new FilterController(publisher.methods);
const formController = new FormController(publisher.methods);

