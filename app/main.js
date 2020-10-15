import Publisher from './helpers/publisher.js';
import { TemplateController } from './components/template/template-controller.js';
import {HeaderController} from './components/header/header-controller.js'

const publisher = new Publisher();

const headerController = new HeaderController(publisher.methods())
const templateController = new TemplateController(publisher.methods());
