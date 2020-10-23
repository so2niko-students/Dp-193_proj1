import './header-styles.scss';
import searchIcon from '../../images/svg/search.svg';

export class HeaderView {
    headerElem = document.querySelector('.header');

    constructor({
      showContacts, showPartners, showGallery, handleSearch,
    }) {
      this.showContacts = showContacts;
      this.showPartners = showPartners;
      this.showGallery = showGallery;
      this.handleSearch = handleSearch;
    }

    render = () => {
      this.headerElem.innerHTML = `
            <nav class="navbar navbar-light">
              <a class="navbar-brand mx-3 header__logo" href="#" data-id="home">
                <img src="./app/images/logo-1.png" width="85px" class="d-inline-block img-fluid" alt="logo" >
              </a>
              
               <div class="input-group header__search">
                   <form class="form-inline">
                       <input 
                           type="text" 
                           class="form-control header__input " 
                           placeholder="Search model..." 
                           aria-label="Username" 
                           aria-describedby="basic-add">
                      <div class="input-group-prepend search-btn">
                        <span class="input-group-text" id="basic-add">
                           <img 
                            src="${searchIcon}" 
                            alt="search icon"
                            height="15px"
                            width="15px" />
                        </span>
                      </div>
                   </form>
                </div>
            
              <div class="" id="navbarSupportedContent">
                <ul class="d-flex mx-3">
                  <li class="nav-item  header__link " id="partners">
                    <a class="nav-link" href="#">Our Partners</a>
                  </li>
                  <li class="nav-item header__link" id="contacts">
                    <a class="nav-link" href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </nav>
      `;
      this.inputElem = document.querySelector('.header__input');

      this.addEvents();
    };

    addEvents = () => {
      const filterElem = document.querySelector('.header__search');
      filterElem.addEventListener('change', this.handleSearch);

      const logoElem = document.querySelector('.header__logo');
      logoElem.addEventListener('click', this.showGallery);

      const partnersElem = document.querySelector('#partners');
      partnersElem.addEventListener('click', this.showPartners);

      const contactsElem = document.querySelector('#contacts');
      contactsElem.addEventListener('click', this.showContacts);
    }
    clearInput = () => {
      this.inputElem.value = '';
    };
}
