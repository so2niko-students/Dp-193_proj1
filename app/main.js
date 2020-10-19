import Publisher from './helpers/publisher.js';
import { FilterController } from './components/filter/filter-controller.js';
import { HeaderController } from './components/header/header-controller.js';
import { CallController } from './components/callMe/call-controller.js';
import './css/main.scss';

const publisher = new Publisher();
const headerController = new HeaderController(publisher.methods);
const filterController = new FilterController(publisher.methods);
const callController = new CallController();
