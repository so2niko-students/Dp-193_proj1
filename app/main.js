import Publisher from './helpers/publisher.js';
// import { TemplateController } from './components/template/template-controller.js';
import ControllerCarsGallery from './components/cars-gallery/controller-cars-gallery.js';
import './css/main.scss';

const publisher = new Publisher();
// const templateController = new TemplateController(publisher.methods);
const carsGallery = new ControllerCarsGallery(publisher.methods);
