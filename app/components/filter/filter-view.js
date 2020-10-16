import './filter.scss';

export class FilterView {
  modalContainer = document.querySelector('.modal-window');

  constructor(handleSubmit, formatName) {
    this.handleSubmit = handleSubmit;
    this.formatName = formatName;
  }

  renderStructure = () => {
    this.modalContainer.insertAdjacentHTML('afterbegin', `
      <form class="filter col-md-6">
        <ul class="filter__categories"></ul>
        <div class="filter__controls">
          <input class="filter__button filter__close" value="Close" type="button">
          <div>
            <input class="filter__button filter__reset" value="Reset" type="reset">
            <input class="filter__button filter__submit" value="Search" type="submit">
          </div>
        </div>
      </form>
    `);

    this.filterForm = this.modalContainer.querySelector('.filter');
    this.categoriesList = this.filterForm.querySelector('.filter__categories');

    this.filterForm.addEventListener('submit', this.handleSubmit);

    this.filterForm.querySelector('.filter__close').addEventListener('click', this.hideFilter);
  };

  renderCategories = (data) => {
    this.categoriesList.innerHTML = data.map((category) => `
      <li class="filter__categories-item">
        <div class="filter__categories-name">${this.formatCategoryName(category.name)}</div>
        <fieldset class="filter__options-list">
          ${this.renderOptions(category)}
        </fieldset>
      </li>
    `).join('');

    this.filterForm.querySelectorAll('.filter__categories-name')
      .forEach((categoryItem) => categoryItem.addEventListener('click', this.setActiveItem));
  };

  renderOptions = (category) => {
    const { name, values } = category;
    let optionsHtml = '';

    if (typeof values[0] === 'number') {
      optionsHtml = `
        <label class="filter__options-label filter__options-label-number">From
          <input 
            type="number" 
            placeholder="${Math.floor(Math.min(...values))}"
            value="${Math.floor(Math.min(...values))}" 
            class="filter__options-input" 
            data-category="${name}"
          >
        </label>
        <label class="filter__options-label filter__options-label-number">To
          <input 
            type="number" 
            placeholder="${Math.ceil(Math.max(...values))}"
            value="${Math.ceil(Math.max(...values))}" 
            class="filter__options-input" 
            data-category="${name}"
          >
        </label>
      `;
    } else {
      optionsHtml = values.map((value) => `
        <label class="filter__options-label">
          <input class="filter__options-check" type="checkbox" name="${value}" data-category="${name}">${this.formatOptionName(value)}
        </label>
      `).join('');
    }
    return optionsHtml;
  };

  formatCategoryName = (name) => this.formatName(name, '-');

  formatOptionName = (name) => this.formatName(name, ' ');

  setActiveItem = (event) => {
    const categoryNode = event.target.closest('.filter__categories-item');

    if (!categoryNode.classList.contains('filter__categories-item--active')) {
      this.removeActiveItem();
      categoryNode.classList.add('filter__categories-item--active');
    } else {
      this.removeActiveItem();
    }
  };

  removeActiveItem = () => {
    const activeItem = this.modalContainer.querySelector('.filter__categories-item--active');
    if (activeItem) {
      activeItem.classList.remove('filter__categories-item--active');
    }
  };

  showFilter = () => {
    this.modalContainer.style.display = 'flex';
    this.filterForm.style.display = 'block';
  };

  hideFilter = () => {
    this.removeActiveItem();
    this.modalContainer.style.display = 'none';
    this.modalContainer.style.display = 'none';
  };
}
