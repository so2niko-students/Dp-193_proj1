import './form-style.scss';

export class FormView {
  main = document.querySelector('main');

  constructor(handleSubmitForm) {
    this.handleSubmitForm = handleSubmitForm;
  }

  submitFormListener = () => {
    const form = document.querySelector('.confirm-form');
    form.addEventListener('submit', this.handleSubmitForm);
  }

  renderContainer = () => {
    this.main.innerHTML = `<div class="accept-block">
                          <div class="accept-inform">                          
                          </div>
                          <div class="vl">
                          </div>
                          <div class="form-block">
                               <p>Fill this form down below:</p>
                               <form class="confirm-form">
                                   <input type="text" class="input-text" name="full-name" minlength="4" placeholder="Full name*" required>
                                   <input type="email" class="input-text" placeholder="Email">
                                   <input type="tel" class="input-text" name="telephone" maxlength="11" minlength="11"  placeholder="Phone number*"  required>
                                   <input type="submit" class = "input-submit" value="Accept">
                                </form>
                          </div>
                      </div>`;
    this.submitFormListener();
  }

    renderCarDetails = (cardData) => {
      const container = document.querySelector('.accept-inform');
      const carDetailsList = this.addDetails(cardData);
      container.innerHTML = carDetailsList;
    };

    addDetails = (cardData) => {
      let cardDetailsHtml = '';
      const keys = Object.keys(cardData);
      cardDetailsHtml += `<p>Check that information is correct</p>
            <p> ${cardData.model}</p>
            <p> ${cardData.brand}</p>
            <ul>`;
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i] !== 'brand' && keys[i] !== 'model' && keys[i] !== 'id' && keys[i] !== 'photoUrl') {
          cardDetailsHtml += `<li>${keys[i]}:  ${cardData[keys[i]]}</li>`;
        }
      }
      cardDetailsHtml += '</ul>';
      return cardDetailsHtml;
    };
}
