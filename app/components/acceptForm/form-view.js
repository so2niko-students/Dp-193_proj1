import './form-style.scss';

export class FormView {

  main = document.querySelector('main');
  
  constructor(handleSubmitForm){
    this.handleSubmitForm = handleSubmitForm
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
                                   <input type="text" name="full-name" placeholder="Full name">
                                   <input type="text" placeholder="Email">
                                   <input type="text" name="telephone" placeholder="Telephone">
                                   <input type="submit" value="Accept">
                                </form>
                          </div>
                      </div>`;
    this.submitFormListener();
  }

    renderCarDetails = (cardData) => {
      let container = document.querySelector('.accept-inform');
      let cardDetailsHtml = '';
    
     this.addDetails = (cardData) => {

      cardDetailsHtml += `<p>Check that information is correct</p>
            <p> ${cardData.model}</p>
            <ul>`;

      for (let key in cardData) {
        if (key != "photoUrl" && key != "id") {
            cardDetailsHtml += `<li>${key}:  ${cardData[key]}</li>`;
            }
          }
          cardDetailsHtml +='</ul>';
        };

        const carDetailsList = this.addDetails(cardData);
        container.innerHTML=cardDetailsHtml;
       
    };
   
  };

