import Publisher from './helpers/publisher.js';
import { FilterController } from './components/filter/filter-controller.js';
import { HeaderController } from './components/header/header-controller.js';
import { ControllerDetails } from './components/car-details/controller-car-details.js'
import './css/main.scss';

const publisher = new Publisher();
const headerController = new HeaderController(publisher.methods);
const filterController = new FilterController(publisher.methods);
const controllerDetails = new ControllerDetails(publisher.methods);
