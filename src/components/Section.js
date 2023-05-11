export default class Section {
  constructor({ items, renderer }, containerSelector){
    this._initialCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(data) {
    this._container.prepend(this._renderer(data));
  }

  renderItem() {
    this._initialCards.forEach(item => {
      this.addItem(item);
    })
  }
}
