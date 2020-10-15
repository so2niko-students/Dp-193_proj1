export class ContactsView {
  main = document.querySelector('.main');

  render() {
    this.main.innerHTML = `
      <section class="contacts d-flex flex-row align-items-start justify-content-between col-sm-4 col-md-4 col-lg-4 col-lx-4 px-3 mx-auto">
  <div>
    <div>
      <h3 class="contacts_title pt-4 pb-3 ">
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
        <span class="contacts_item d-flex pb-2">Pobeda street, 40</span>
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
</section>
<section class="d-flex flex-column align-items-start justify-content-between col-sm-12 col-md-12 col-lg-12 col-lx-12 mt-3 mx-auto">
  <div class="mx-auto d-flex flex-row  justify-content-between col-sm-4 col-md-4 col-lg-4 col-lx-4 px-3 mx-auto">
    <iframe class="mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.795710056671!2d35.01088877698998!3d48.40286621578827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb496db41bcf%3A0x73dc0b934d13bc0a!2z0YPQuy4g0J_QvtCx0LXQtNGLLCA0MCwg0JTQvdC40L_RgNC-LCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1602761195902!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>
  <div class="mx-auto mt-5">
    <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModalCenter">
      Call me back
    </button>
  </div>

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</section>`;
  }
}
