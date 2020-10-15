import { Publisher } from './helpers/publisher.js';
import { ContactsController } from './components/contacts/contacts-controller.js'
import { PartnersController } from './components/parners/partners-controller.js';

import './css/main.scss';

const publisher = new Publisher();
const contactsController = new ContactsController(publisher.getMethods());
const partnersController = new PartnersController(publisher.getMethods());
