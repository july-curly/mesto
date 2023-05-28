import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelector('.popup__save');
    this._loadingText = this._submitButton.textContent
  }

  _getInputValues() {
    const data = Object.fromEntries(new FormData(this._form));
    return data
  }

  setInputValue(dataUser) {
    this._inputList.forEach((input) => {
      input.value = dataUser[input.name];
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `${this._submitButton.textContent}...`
      this._submitFunction(this._getInputValues())
    })
  }

  resetLoadingText() {
    this._submitButton.textContent = this._loadingText;
  }

  close() {
    super.close();
    this._form.reset();
  }
}
