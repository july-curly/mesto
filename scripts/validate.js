const validation = {
  formSelector: document.querySelectorAll('.popup__form'),
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error'
}

// получаем массив форм, находим в них инпуты и кнопки, вешаем слушателя
const enableValidation = (config) => {
  const forms = Array.from(config.formSelector);
    forms.forEach(form => {
      const formInputs = form.querySelectorAll(config.inputSelector);
      const buttonElement = form.querySelector(config.submitButtonSelector);
      putEventListeners(formInputs, buttonElement, config.inactiveButtonClass, config.inputErrorClass, config.errorClass);
    })
}

const putEventListeners = (formInputs, buttonElement, inactiveButtonClass, inputErrorClass, errorClass) => {
 // const formInputs = Array.from(formToValidate.inputSelector);
//  const buttonElement = formToValidate.querySelector(submitButtonSelector) ;
   formInputs.forEach(input => {
      input.addEventListener('input', () => {
      checkInputValidity(input, inputErrorClass, errorClass);
      toggleButtonState(formInputs, buttonElement, inactiveButtonClass);

     } )
   })
}

const checkInputValidity = (input, inputErrorClass, errorClass) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`)
  if (input.validity.valid) {
    hideInputError(input, currentInputErrorContainer, inputErrorClass, errorClass);
  }
  else {
    showInputError(input, currentInputErrorContainer, inputErrorClass, errorClass);
  }
}

const showInputError = (input, currentInputErrorContainer, inputErrorClass, errorClass) => {
  input.classList.add(inputErrorClass);
  currentInputErrorContainer.textContent = input.validationMessage;
  currentInputErrorContainer.classList.add(errorClass);
};

const hideInputError = (input, currentInputErrorContainer, inputErrorClass, errorClass) => {
  input.classList.remove(inputErrorClass);
  currentInputErrorContainer.classList.remove(errorClass);
  currentInputErrorContainer.textContent = '';
};

const toggleButtonState = (formInputs, buttonElement, inactiveButtonClass) => {
  if(hasInvalidInput(formInputs)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  }
  else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled", true);
  }
}

const hasInvalidInput = (formInputs) => {
  return Array.from(formInputs).some((input) => {
    return !input.validity.valid;
  }
)};

const resetValidation = (form) => {
  form.querySelectorAll(validation.inputSelector).forEach((input) => {
    const currentInputError = document.querySelector(`.popup__error_type_${input.name}`);
    if (!input.validity.valid) {
      hideInputError(input, currentInputError, validation.inputErrorClass, validation.errorClass);
    }
  })
}


enableValidation(validation);

