import './style-car-details.scss';

export class ViewDetails {
  main = document.querySelector('.main');
  modalWindow = document.querySelector('.modal-window');

  color = null;

  constructor(handleAddToOrder){
    this.handleAddToOrder = handleAddToOrder
  }

  renderCarCard({ id, photoUrl, brand, model, price, color, country, year, seats, 'body-type': bodyType, transmission,'engine-capacity': engineCapacity,
                'fuel-tank':fuelTank, 'max-power':maxPower, 'max-speed':maxSpeed, consumption, 'trunk-volume': trunkVolume}) {    
    this.modalWindow.innerHTML = ` 
      <div class="container">
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
                  <button class="first-color" style="background:${color[0]};"></button>
                  <button class="second-color" style="background:${color[1]};"></button>
                  <button class="third-color" style="background:${color[2]};"></button>
                </li>
                <li class="list-group-item">Country: ${country}</li>
                <li class="list-group-item">Year: ${year}</li>
                <li class="list-group-item">Seats: ${seats}</li>
                <li class="list-group-item">Body-type: ${bodyType}</li>
                <li class="list-group-item">Transmission:
                  <select class="transmission-container">
                    <option>${transmission[0]}</option>
                    <option>${transmission[1]}</option>
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
            <button type="button" class="close-popUp">Close</button>
            <button type="button" class="makeOrder btn btn-primary" data-car-id="${ id }">Make an order</button>
          </div>
        </div>
      </div>
    `;
    this.getMethod();
  }

  getColor = (event) => {
    this.color = event.target.style.background;
  };

  getValue = () => {
    const transmission = document.querySelector('.transmission-container');

    return {
      transmission: transmission.value,
      color: this.color,
    };
  };

  hideCard = () => {
    const popUp = document.querySelector('.modal-window')
    popUp.style.display = 'none';
  }
  
  openPopup = () => {
    const popUp = document.querySelector('.modal-window')
    popUp.style.display = 'block';
  }

  getMethod = () => {
    const colorContainer = document.querySelector('.color-container');
    colorContainer.addEventListener('click', this.getColor);
    
    const makeOrder = document.querySelector('.makeOrder');
    makeOrder.addEventListener('click', this.handleAddToOrder)

    const closePopup = document.querySelector('.close-popUp');
    closePopup.addEventListener('click', this.hideCard)

    const popUp = document.querySelector('.container')
  };
}

