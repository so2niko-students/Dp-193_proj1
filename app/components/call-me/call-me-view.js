import './call-me-styles.scss';

export class CallView {
    contain = document.querySelector('.popup-container');

    constructor(handleFormSubmit) {
      this.handleFormSubmit = handleFormSubmit;
      this.inputValue = '';
    }

    renderCallMeForm = () => {
      this.contain.innerHTML = `
          <form class="form-hide">
              <p>Fill this form and we will contact with you:</p>
              <input type="tel" class="input-telephone" placeholder="Telephone:">
              <button class="call-me-btn">Call Me</button>
          </form>
          <button class="btn"><i class="fa fa-whatsapp"></i></button>
      `;
      this.addClickHandlers();
    };

    addClickHandlers = () => {
      const form = document.querySelector('.form-hide');
      const iconCallMe = document.querySelector('.btn');
      const input = document.querySelector('.input-telephone');
      const btnSubmit = document.querySelector('.call-me-btn');

      iconCallMe.onclick = () => { form.className = 'form-show'; };
      iconCallMe.ondblclick = () => { form.className = 'form-hide'; };
      btnSubmit.addEventListener('click', () => this.handleFormSubmit(this.inputValue));

      input.addEventListener('input', this.handleChange);
    };

    handleChange = (ev) => {
      this.inputValue = ev.target.value;
    };

    closeForm = (ev) => {
      const form = document.querySelector('.form-show');
      alert("we will write to you in Telegram within 10 minutes");
      form.className = 'form-hide';
      ev.preventDefault();
    };

    eventCloseForrForm = () => {
      const form = document.querySelector('.form-show');
      form.addEventListener('submit', this.closeForm);
    }
}
