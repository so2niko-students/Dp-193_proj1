import Publisher from './helpers/publisher.js';
import { HeaderController } from './components/header/header-controller.js'
import './css/main.scss';

const publisher = new Publisher();

const headerController = new HeaderController(publisher.methods);
