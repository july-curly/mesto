export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._formInputs = form.querySelectorAll(this._inputSelector);
    this._buttonElement = form.querySelector(this._submitButtonSelector);
  }

  _showInputError(input, currentInputErrorContainer) {
    input.classList.add(this._inputErrorClass);
    currentInputErrorContainer.textContent = input.validationMessage;
    currentInputErrorContainer.classList.add(this._errorClass);
  }

  _hideInputError(input, currentInputErrorContainer) {
    input.classList.remove(this._inputErrorClass);
    currentInputErrorContainer.classList.remove(this._errorClass);
    currentInputErrorContainer.textContent = '';
  }

  _checkInputValidity(input) {
    const currentInputErrorContainer = this._form.querySelector(`#${input.id}-error`)
    if (input.validity.valid) {
      this._hideInputError(input, currentInputErrorContainer);
    }
    else {
      this._showInputError(input, currentInputErrorContainer);
    }
  }

  _hasInvalidInput() {
    return Array.from(this._formInputs).some((input) => {
      return !input.validity.valid;
    }
  )};

  _toggleButtonState() {
    if(this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    }
    else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled", true);
    }
  }

  _putEventListeners() {
    this._formInputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      })
    })
  }

  enableValidation() {
    this._putEventListeners();
  }

  resetValidation() {
    this._formInputs.forEach((input) => {
      const currentInputError = this._form.querySelector(`.popup__error_type_${input.name}`);
      if (!input.validity.valid) {
        this._hideInputError(input, currentInputError);
      }
    })
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }
}
