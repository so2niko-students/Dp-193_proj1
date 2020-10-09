export class TemplateView {
  main = document.querySelector('.main');

  render = (content) => {
    this.main.innerHTML = `<h2>${content}</h2>`;
  };
}
