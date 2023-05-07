import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector){
    super(popupSelector);
    this._popupGalleryImg = this._popup.querySelector('.popup-gallery__img');
    this._popupGalleryTitle = this._popup.querySelector('.popup-gallery__title');
  }

  open = (cardData) => {
    this._popupGalleryTitle.textContent = cardData.name;
    this._popupGalleryImg.src = cardData.link;
    this._popupGalleryImg.alt = cardData.name;
    super.open();
  }

}
