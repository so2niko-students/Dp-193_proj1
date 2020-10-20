import './contacts-styles.scss';

export class ContactsView {
	main = document.querySelector('.main');

	render = () => {
		this.main.innerHTML = `
	     <section >
			  <div class="d-flex flex-row justify-content-between col-sm-12 col-md-10 col-lg-8 col-xl-5 mx-auto">
			  <div>
				    <div>
					      <h3 class="contacts_title pt-4 pb-3 pr-3">
					        Sales Managers:
					      </h3>
					      <p class="contacts_content">
					        <span class="contacts_item d-flex pb-2">Natan: +38000258789 </span>
					        <span class="contacts_item d-flex pb-2">Oleg: +38000258789</span>
					        <span class="contacts_item d-flex pb-2">Robert: +38000258789</span>
					      </p>
				    </div>
					    <div>
						      <h3 class="contacts_title pt-4 pb-3 ">
						        Partnership:
						      </h3>
						      <p class="contacts_content">
						        <span class="contacts_item d-flex pb-2">Taras: +38000258789 </span>
						      </p>
					    </div>
			  		</div>
			  <div>
				    <div>
					      <h3 class="contacts_title pt-4 pb-3 ">
					        Address:
					      </h3>
					      <p class="contacts_content">
					        <span class="contacts_item d-flex pb-2">Ukraine</span>
					        <span class="contacts_item d-flex pb-2">Dnipro</span>
					        <span class="contacts_item d-flex pb-2">Pobeda street 40</span>
					      </p>
				    </div>
				    <div>
					      <h3 class="contacts_title pt-4 pb-3 ">
					        Email:
					      </h3>
					      <p class="contacts_content">
					        <span class="contacts_item d-flex pb-2">kolimaga.gmail.com </span>
					      </p>
				    </div>
				    </div>
			  </div>
			</section>
			<section>
				  <div class="d-flex col-sm-12 col-md-12 col-lg-12 col-lx-12">
				    	<iframe class="mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.795710056671!2d35.01088877698998!3d48.40286621578827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb496db41bcf%3A0x73dc0b934d13bc0a!2z0YPQuy4g0J_QvtCx0LXQtNGLLCA0MCwg0JTQvdC40L_RgNC-LCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1602761195902!5m2!1sru!2sua" width="1200" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
				  </div>
			</section>`;
	}
}
