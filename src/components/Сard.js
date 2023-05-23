export default class Card {
  constructor(cardData, templateSelector, openImage, deleteCard) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._userId = cardData.userId;
    this._ownerId = cardData.owner._id;
    this._templateSelector = templateSelector;
    this._openImage = openImage;
    this._deleteCard = deleteCard;
  }

  _handleDelete = () => {
    this._deleteCard(this)
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

  removeCard() {
    this._postElement.remove();
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

    if (this._userId !== this._ownerId) {
      this._postDelElement.remove();
    }
    
    this._setEventListeners(this._postElement);
    return  this._postElement
  }
}
