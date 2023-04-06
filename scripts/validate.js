const validationConfig = {
  formSelector: document.querySelectorAll('.popup__form'),
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error'
}

const enableValidation = (config) => {
  const forms = Array.from(config.formSelector);
    forms.forEach(form => {
      const formInputs = form.querySelectorAll(config.inputSelector);
      const buttonElement = form.querySelector(config.submitButtonSelector);
  //   form.addEventListener('submit', (evt) => {
  //     evt.preventDefault();
  //   })
    putEventListeners(formInputs, buttonElement, config.inactiveButtonClass, config.inputErrorClass, config.errorClass);
    })

}

const putEventListeners = (formInputs, buttonElement, inactiveButtonClass, inputErrorClass, errorClass) => {
 // const formInputs = Array.from(formToValidate.inputSelector);
//  const buttonElement = formToValidate.querySelector(submitButtonSelector) ;
   formInputs.forEach(input => {
      input.addEventListener('input', () => {
      checkInputValidity(input, inputErrorClass, errorClass);
     // toggleButtonState(input, buttonElement, inactiveButtonClass);

     } )
   })
}

const checkInputValidity = (input, inputErrorClass, errorClass) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`)
  if (input.validity.valid) {
    console.log("ok");
    hideInputError(input, currentInputErrorContainer, inputErrorClass, errorClass);
  }
  else {
    console.log("fuck off");
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

enableValidation(validationConfig);





// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__save',
//   inactiveButtonClass: 'popup__save_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   //errorClass: 'popup__error_visible'
//  });
