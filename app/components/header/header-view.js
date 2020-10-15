import './header-styles.scss';

export class HeaderView {
    headerElem = document.querySelector('.header');

    constructor({ contacts, partners, home, search }) {
      this.contacts = contacts;
      this.partners = partners;
      this.home = home;
      this.search = search;
    }

    render = () => {
      this.headerElem.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light">
              <a class="navbar-brand mx-3 header__logo" href="#" data-id="home">
                <img src="./app/images/logo-1.png" width="85px" class="d-inline-block img-fluid" alt="logo" >
              </a>
              
               <div class="input-group header__search">
                   <form class="form-inline">
                       <input 
                           type="text" 
                           class="form-control header__input " 
                           placeholder="Search" 
                           aria-label="Username" 
                           aria-describedby="basic-add">
                      <div class="input-group-prepend search-btn">
                        <span class="input-group-text" id="basic-add">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </span>
                      </div>
                   </form>
                </div>
            
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item header__link mx-3" id="partners">
                    <a class="nav-link" href="#">Our Partners</a>
                  </li>
                  <li class="nav-item header__link" id="contacts">
                    <a class="nav-link" href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </nav>
      `;
      this.addEvents();
    }

    addEvents = () => {
      const filterElem = document.querySelector('.header__search');
      filterElem.addEventListener('change', this.search);

      const logoElem = document.querySelector('.header__logo');
      logoElem.addEventListener('click', this.home);

      const partnersElem = document.querySelector('#partners');
      partnersElem.addEventListener('click', this.partners);

      const contactsElem = document.querySelector('#contacts');
      contactsElem.addEventListener('click', this.contacts);
    }
}
