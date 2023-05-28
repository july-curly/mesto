import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._submitButton = this._form.querySelector('.popup__save');
    this._loadingText = this._submitButton.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.submitButton.textContent = `${this.submitButton.textContent}...`;
      this._submitFunction({ element: this.element, cardId: this.cardId });
    })
  }

  resetLoadingText() {
    this._submitButton.textContent = this._loadingText;
  }

  open = ({ element, cardId }) => {
    super.open();
    this.element = element;
    this.cardId = cardId;
  }
}
