import Publisher from './helpers/publisher.js';
import { ContactsController } from './components/contacts/contacts-controller.js'
import { PartnersController }from './components/partners/partners-controller.js';

import './css/main.scss';

const publisher = new Publisher();
const contactsController = new ContactsController(publisher.methods);
const partnersController = new PartnersController(publisher.methods);

