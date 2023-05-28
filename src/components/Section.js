export default class Section {
  constructor(renderer, containerSelector){
    //this._initialCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItemAppend(item) {
    this._container.append(item);
  }

  addItemPrepend(item) {
    this._container.prepend(item);
  }

  renderItem(initialCards) {
    initialCards.forEach(item => {
      this._renderer(item);
    })
  }
}
