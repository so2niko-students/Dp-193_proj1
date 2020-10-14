import Publisher from './helpers/publisher.js';
import { TemplateController } from './components/template/template-controller.js';

const publisher = new Publisher();
const templateController = new TemplateController(publisher.methods);
