import Publisher from './helpers/publisher.js';
import { ContactsController } from './components/contacts/contacts-controller.js';
import { PartnersController } from './components/partners/partners-controller.js';
import { HeaderController } from './components/header/header-controller.js'
import { ControllerCarsGallery } from './components/cars-gallery/controller-cars-gallery.js';
import { FilterController } from './components/filter/filter-controller.js';
import { FormController } from './components/accept-form/form-controller.js';
import { CallController } from './components/callMe/call-me-controller.js';
import { ControllerDetails } from './components/car-details/controller-car-details';
import { SliderController } from './components/slider/slider-controller.js'


import './css/main.scss';

const publisher = new Publisher();
const contactsController = new ContactsController(publisher.methods);
const partnersController = new PartnersController(publisher.methods);
const headerController = new HeaderController(publisher.methods);
const callController = new CallController();
const carsGallery = new ControllerCarsGallery(publisher.methods);
const filterController = new FilterController(publisher.methods);
const controllerDetails = new ControllerDetails(publisher.methods);
const formController = new FormController(publisher.methods);
const sliderController = new SliderController(publisher.methods);

