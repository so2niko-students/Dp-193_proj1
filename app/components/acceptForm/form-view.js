import './form-style.scss';

export class FormView {

  main = document.querySelector('main');
  
  constructor(handleSubmitForm){
    this.handleSubmitForm = handleSubmitForm;
  }
  
  submitFormListener = () => {
    const form = document.querySelector('.comfirm-form');
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
                               <form class="comfirm-form">
                                   <input type="text" class="input-text" name="full-name" placeholder="Full name">
                                   <input type="text" class="input-text" placeholder="Email">
                                   <input type="text" class="input-text" name="telephone" placeholder="Telephone">
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
      cardDetailsHtml += `<p>Check that information is correct</p>
            <p> ${cardData.model}</p>
            <ul>`;

      for (const key in cardData) {
        if (key != "photoUrl" && key != "id") {
            cardDetailsHtml += `<li>${key}:  ${cardData[key]}</li>`;
            }
          }
          cardDetailsHtml +='</ul>';

          return cardDetailsHtml;
        };
   
  };

