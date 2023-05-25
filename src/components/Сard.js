export default class Card {
  constructor(cardData, templateSelector, openImage, deleteCard, getStatusLike) {
    console.log(cardData)
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.name;
    this._userId = cardData.userId;
    this._ownerId = cardData.owner._id;
    this._likes = cardData.likes;
    this._likesLength = cardData.likes.length;
    this._cardId = cardData._id;
    this._templateSelector = templateSelector;
    this._openImage = openImage;
    this._deleteCard = deleteCard;
    this._getStatusLike = getStatusLike;
    this._postElement = this._templateSelector.querySelector('.post__item').cloneNode(true);
    this._postDelElement = this._postElement.querySelector('.post__del')
    this._postImgElement = this._postElement.querySelector('.post__img');
    this._postDescription = this._postElement.querySelector('.post__description');
    this._postImgElement.src = this._link;
    this._postImgElement.alt = this._name;
    this._postDescription.textContent = this._name;
    this._sum = this._postElement.querySelector('.post__like-sum');
    this._postLikeElement = this._postElement.querySelector('.post__like');
  }

  _handleDelete = () => {
    this._deleteCard(this)
  }

  _handleLike = () => {
    this._getStatusLike(this._postLikeElement, this._cardId)
    //this._postLikeElement.classList.toggle('post__like_active');
  }

  toggleLike(likes) {
    this._postLikeElement.classList.toggle('post__like_active');
    this._sum.textContent = likes.length;
  }

  _handleOpenImg = () => {
    this._openImage(this._cardData);
  }

  _checkLikes() {
    this._likes.forEach(element => {
      if(element._id === element._userId) {
        this._postLikeElement.classList.add('post__like_active');
        return
      }
    });
    this._sum.textContent = this._likesLength;
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


    if (this._userId !== this._ownerId) {
      this._postDelElement.remove();
    }
    this._checkLikes();
    this._setEventListeners();
    return  this._postElement
  }
}
