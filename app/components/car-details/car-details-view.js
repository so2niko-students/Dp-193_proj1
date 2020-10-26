import './car-details-styles.scss';

export class ViewDetails {
  detailContainer = document.querySelector('.modal-window');

  constructor(handleAddToOrder) {
    this.handleAddToOrder = handleAddToOrder;
  }

  renderCarCard(data) {
    const { id, photoUrl, brand, model, price, color, country, year, seats, 'body-type': bodyType, transmission, 'engine-capacity': engineCapacity,
      'fuel-tank': fuelTank, 'max-power': maxPower, 'max-speed': maxSpeed, consumption, 'trunk-volume': trunkVolume } = data;
    this.detailContainer.insertAdjacentHTML('afterbegin', ` 
      <div class="car-container">
        <div class="row">
          <div class="col">
            <div class="row">
              <img src="${photoUrl[1]}" class="card-img-top">
            </div>
            <div class="row">
              <div class="col car-img"><img src="${photoUrl[0]}" class="card-img-top"></div>
              <div class="col car-img"><img src="${photoUrl[1]}" class="card-img-top"></div>
              <div class="col car-img"><img src="${photoUrl[2]}" class="card-img-top"></div>
            </div>
          </div>
          <div class="col">
            <div class="list-group">
              <ul class="list-group">
                <li class="list-group-item active">${brand}</li>
                <li class="list-group-item">Model: ${model}</li>
                <li class="list-group-item">Price: ${price}</li>
                <li class="color-container list-group-item">Color: 
                    ${this.renderColor(color)}
                </li>
                <li class="list-group-item">Country: ${country}</li>
                <li class="list-group-item">Year: ${year}</li>
                <li class="list-group-item">Seats: ${seats}</li>
                <li class="list-group-item">Body-type: ${bodyType}</li>
                <li class="list-group-item">Transmission:
                  <select class="transmission-container">
                    ${this.renderTransmission(transmission)}
                  </select>
                </li>
                <li class="list-group-item">Engine-capacity: ${engineCapacity}</li>
                <li class="list-group-item">Fuel-tank: ${fuelTank}</li>
                <li class="list-group-item">Max-power: ${maxPower}</li>
                <li class="list-group-item">Max-speed: ${maxSpeed}</li>
                <li class="list-group-item">Consumption: ${consumption}</li>
                <li class="list-group-item">Trunk-volume: ${trunkVolume}</li>
              </ul>              
            </div>
          <div class="d-flex justify-content-between">
            <button type="button" class="close-popup  btn btn-primary">Close</button>
            <button type="button" class="make-order btn btn-primary" data-car-id="${id}">Make an order</button>
          </div>
        </div>
      </div>
    `);
    this.addListeners();
  }

  renderColor = (colors) => colors.map((color) => `
    <button class="first-color" style="background:${color};"></button>
 `).join('');

  renderTransmission = (transmissions) => transmissions.map((transmission) => `
    <option value="${transmission}">${transmission}</option>
  `).join('');

  hideCard = () => {
    const container = document.querySelector('.car-container');
    this.detailContainer.removeChild(container);
    this.detailContainer.style.display = 'none';
  };

  openPopup = () => {
    const filter = document.querySelector('.filter');
    filter.style.display = 'none';
    this.detailContainer.style.display = 'block';
  };

  handleClickColorButton = (event) => {
    if (document.querySelector('button[data-active]')) {
      document.querySelector('button[data-active]').removeAttribute('data-active');
    }
    event.target.setAttribute('data-active', true);
  };

  getValues = () => {
    const color = document.querySelector('button[data-active]').style.background;
    const transmission = document.querySelector('.transmission-container').value;
    return { color, transmission };
  };

  addListeners = () => {
    const colorContainer = document.querySelector('.color-container');
    colorContainer.addEventListener('click', this.handleClickColorButton);

    const makeOrder = document.querySelector('.make-order');
    makeOrder.addEventListener('click', this.handleAddToOrder);

    const closePopup = document.querySelector('.close-popup');
    closePopup.addEventListener('click', this.hideCard);

    this.detailContainer.addEventListener('click', this.handleLayoutClick);
  };

  handleLayoutClick = (event) => {
    if (event.target === this.detailContainer) {
      this.hideCard();
    }
  };
}
