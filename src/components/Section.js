export default class Section {
  constructor({ items, renderer }, containerSelector){
    this._initialCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItem() {
    this._initialCards.forEach(item => {
      this.addItem(this._renderer(item));
    })
  }
}
