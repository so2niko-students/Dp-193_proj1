import './partners-styles.scss';

export class PartnersView {
  constructor (links) {
    this.links = links;
  }

  main = document.querySelector('.main');

  render = () => {
    console.log(this.links)
    this.main.innerHTML = `
      <h2 class="text-center pt-5">Our Partners</h2>
      <div class="row px-5">
        ${this.renderImg(this.links)}
      </div>
    `;
  };

  renderImg = (links) => links.reduce((acc, el) =>
      (acc += `
        <div class="col-sm-6 col-md-2 d-flex align-items-center ">
          <img src="${el}" alt="Car picture" class="img-fluid pb-5 pt-5">
        </div>
      `), '');
}