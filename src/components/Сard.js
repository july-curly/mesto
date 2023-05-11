export default class Card {
  constructor(cardData, templateSelector, openImage) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.title;
    this._templateSelector = templateSelector;
    this._openImage = openImage;
  }

  _handleDelete = () => {
    this._postElement.remove();
  }

  _handleLike = () => {
    this._postLikeElement.classList.toggle('post__like_active');
  }

  _handleOpenImg = () => {
    this._openImage(this._cardData);
  }

  _setEventListeners() {
    this._postDelElement.addEventListener('click', this._handleDelete);
    this._postLikeElement.addEventListener('click', this._handleLike);
    this._postImgElement.addEventListener('click', this._handleOpenImg);
  }

  createCard() {
    this._postElement = this._templateSelector.querySelector('.post__item').cloneNode(true);
    this._postLikeElement = this._postElement.querySelector('.post__like');
    this._postDelElement = this._postElement.querySelector('.post__del')
    this._postImgElement = this._postElement.querySelector('.post__img');
    this._postDescription = this._postElement.querySelector('.post__description');
    this._postImgElement.src = this._link;
    this._postImgElement.alt = this._name;
    this._postDescription.textContent = this._name;
    this._setEventListeners(this._postElement);
    return  this._postElement
  }
}
