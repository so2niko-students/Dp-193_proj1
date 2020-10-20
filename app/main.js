import Publisher from './helpers/publisher.js';
import { FilterController } from './components/filter/filter-controller.js';
import { HeaderController } from './components/header/header-controller.js';
import './css/main.scss';
import { SliderController } from './components/slider/slider-controller.js';

const publisher = new Publisher();
const headerController = new HeaderController(publisher.methods);
const filterController = new FilterController(publisher.methods);
const sliderController = new SliderController(publisher.methods);

fetch('http://localhost:8080/base/database.json').then((response) => response.json()).then((data) => publisher.notify('LOAD_DATA', data));
