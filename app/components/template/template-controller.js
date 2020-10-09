import { TemplateModel } from './template-model.js';
import { TemplateView } from './template-view.js';

export class TemplateController {
  constructor({ subscribe, unsubscribe, notify }) {
    this.view = new TemplateView();
    this.model = new TemplateModel();

    this.subscribe = subscribe;
    this.unsubscribe = unsubscribe;
    this.notify = notify;

    this.onLoad();
  }

  onLoad = () => {
    const title = this.model.getTitle();

    this.view.render(title);
  };
}
