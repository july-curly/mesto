export default class Section {
  constructor(renderer, containerSelector){
    //this._initialCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItem(initialCards) {
    initialCards.forEach(item => {
      this._renderer(item);
    })
  }
}
