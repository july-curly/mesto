const validationConfig = {
  formSelector: document.querySelectorAll('.popup__form'),
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input-error',
  // errorClass: 'popup__error_visible'
}

const enableValidation = (config) => {
  const forms = Array.from(config.formSelector);
   forms.forEach(form => {
    const formInputs = form.querySelectorAll(config.inputSelector);
    const buttonElement = form.querySelector(config.submitButtonSelector);
    console.log(formInputs, buttonElement);
  //   form.addEventListener('submit', (evt) => {
  //     evt.preventDefault();
  //   })
  //  // setEventListener(form);
   })

}

//const setEventListener = (formToValidate) => {
 // const formInputs = Array.from(formToValidate.inputSelector);
//  const buttonElement = formToValidate.querySelector(submitButtonSelector) ;
//   formInputs.forEach(input => {
//     input.addEventListener('input', () => {
//       checkInputValidity(input);

//     } )
//   })
//}

// const checkInputValidity = (input) => {
//   const currentInputErrorContainer = document.querySelector(`#${input.id}-error`)
//   if (input.checkValidity) {
//     currentInputErrorContainer.textContent = '';
//   }
//   else{
//     currentInputErrorContainer.textContent = input.validationMessage;
//   }
// }

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
