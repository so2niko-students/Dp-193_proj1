import './filter.scss';

export class FilterView {
  rootNode = document.getElementById('root');

  constructor(handleSubmit, formatName) {
    this.handleSubmit = handleSubmit;
    this.formatName = formatName;
  }

  render = (data) => {
    this.rootNode.insertAdjacentHTML('afterbegin', `
      <div class="modal-container">
        <div class="filter-wrapper">
          <form class="filter col-md-6">
            <ul class="filter__categories">
              ${this.renderCategories(data)}
            </ul>
            <div class="filter__controls">
              <input class="filter__button filter__close" value="Close" type="button">
              <div>
                <input class="filter__button filter__reset" value="Reset" type="reset">
                <input class="filter__button filter__submit" value="Search" type="submit">
              </div>
            </div>
          </form>
        </div>
      </div>
    `);

    this.modalContainer = this.rootNode.querySelector('.modal-container');
    this.filterForm = this.modalContainer.querySelector('.filter');

    this.filterForm.querySelectorAll('.filter__categories-name')
      .forEach((categoryItem) => categoryItem.addEventListener('click', this.setActiveItem));

    this.filterForm.addEventListener('submit', this.handleSubmit);

    this.filterForm.querySelector('.filter__close').addEventListener('click', this.hideFilter);
  };

  renderCategories = (data) => data.map((category) => `
    <li class="filter__categories-item">
      <div class="filter__categories-name">${this.formatCategoryName(category.name)}</div>
      <fieldset class="filter__options-list">
        ${this.renderOptions(category)}
      </fieldset>
    </li>
  `).join('');

  renderOptions = (category) => {
    const { name, values } = category;

    if (typeof values[0] === 'number') {
      return `
        <label class="filter__options-label filter__options-label-number">From
          <input 
            type="number" 
            placeholder="${Math.round(Math.min(...values))}"
            value="${Math.round(Math.min(...values))}" 
            class="filter__options-input" 
            data-category="${name}"
          >
        </label>
        <label class="filter__options-label filter__options-label-number">To
          <input 
            type="number" 
            placeholder="${Math.round(Math.max(...values))}"
            value="${Math.round(Math.max(...values))}" 
            class="filter__options-input" 
            data-category="${name}"
          >
        </label>
      `;
    }
    return values.map((value) => `
      <label class="filter__options-label">
        <input class="filter__options-check" type="checkbox" name="${value}" data-category="${name}">${this.formatOptionName(value)}
      </label>
    `).join('');
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
    this.filterForm.parentNode.style.display = 'flex';
    this.modalContainer.style.display = 'block';
  };

  hideFilter = () => {
    this.removeActiveItem();
    this.filterForm.parentNode.style.display = 'none';
    this.modalContainer.style.display = 'none';
  };
}
