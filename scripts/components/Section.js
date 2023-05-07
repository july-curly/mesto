export default class Section {
  constructor({ items, renderer }, containerSelector){
    this._initialCards = items;
    this.renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.append(item);
  }

  renderItem() {
    this._initialCards.forEach(item => {
      this.addItem(this.renderer(item));
    })
  }
}
