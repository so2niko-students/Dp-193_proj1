import './call-styles.scss';

export class CallView {
    contain = document.querySelector('.pouop-conteiner');

    constructor(handleFormSubmit) {
      this.handleFormSubmit = handleFormSubmit;
      this.inputValue = '';
    }

    renderCallMeForm = () => {
      this.contain.innerHTML = `
          <form class="form-hide">
              <p>Fill this form and we will contact with you:</p>
              <input type="text" class="input-telephone" placeholder="Telephone:">
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
}
