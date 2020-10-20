import Publisher from './helpers/publisher.js';
import { ContactsController } from './components/contacts/contacts-controller.js'
import { PartnersController }from './components/partners/partners-controller.js';
import { HeaderController } from './components/header/header-controller.js'
import { ControllerCarsGallery } from './components/cars-gallery/controller-cars-gallery.js';
import { FilterController } from './components/filter/filter-controller.js';
import { CallController } from './components/callMe/call-controller.js';

import './css/main.scss';

const publisher = new Publisher();
const contactsController = new ContactsController(publisher.methods);
const partnersController = new PartnersController(publisher.methods);
const headerController = new HeaderController(publisher.methods);
const callController = new CallController();
const carsGallery = new ControllerCarsGallery(publisher.methods);
const filterController = new FilterController(publisher.methods);

