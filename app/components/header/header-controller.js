import { HeaderView } from './header-view.js';
import { HeaderModel } from './header-model.js';

export class HeaderController {
  constructor({ subscribe, notify, events }) {
    this.view = new HeaderView(this.getMethods());
    this.model = new HeaderModel();

    this.notify = notify;
    this.subscribe = subscribe;
    this.events = events;

    this.subscribe(this.events.LOAD_DATA, this.handleLoadData);
    this.subscribe(this.events.FILTERED_DATA, this.handleLoadData);

    this.onLoad();
  }

  onLoad = () => {
    this.view.render();
  };

  handleLoadData = (carsData) => {
    this.model.data = carsData;
  };

  handleSearch = (ev) => {
    const modelName = ev.target.closest('.header__input').value;
    const changedData = this.model.filterByModel(modelName);

    this.notify(this.events.SEARCH_MODEL, changedData);
  }

  handleLogoClick = () => {
    this.notify(this.events.LOGO_SHOWCARS);
  }

  handlePartnersClick = () => {
    this.notify(this.events.SHOW_PARTNERS);
  };

  handleContactsClick = () => {
    this.notify(this.events.SHOW_CONTACTS);
  };

  getMethods = () => ({
    showContacts: this.handleContactsClick,
    showPartners: this.handlePartnersClick,
    showGallery: this.handleLogoClick,
    handleSearch: this.handleSearch,
  });
}
