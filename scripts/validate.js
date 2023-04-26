

// получаем массив форм, находим в них инпуты и кнопки, вешаем слушателя
const enableValidation = (config) => {
  Array.from(config.formSelector).forEach(form => {
    const formInputs = form.querySelectorAll(config.inputSelector);
    const buttonElement = form.querySelector(config.submitButtonSelector);
    putEventListeners(formInputs, buttonElement, config.inactiveButtonClass, config.inputErrorClass, config.errorClass);
  })
}

// слушатель инпутов вешает функции checkInputValidity и toggleButtonState
const putEventListeners = (formInputs, buttonElement, inactiveButtonClass, inputErrorClass, errorClass) => {
    formInputs.forEach(input => {
      input.addEventListener('input', () => {
      checkInputValidity(input, inputErrorClass, errorClass);
      toggleButtonState(formInputs, buttonElement, inactiveButtonClass);
      })
   })
}

// функция проверки валидности значений инпутов, добавляет и удаляет текст ошибки
const checkInputValidity = (input, inputErrorClass, errorClass) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`)
  if (input.validity.valid) {
    hideInputError(input, currentInputErrorContainer, inputErrorClass, errorClass);
  }
  else {
    showInputError(input, currentInputErrorContainer, inputErrorClass, errorClass);
  }
}

// функция добаления текста ошибки
const showInputError = (input, currentInputErrorContainer, inputErrorClass, errorClass) => {
  input.classList.add(inputErrorClass);
  currentInputErrorContainer.textContent = input.validationMessage;
  currentInputErrorContainer.classList.add(errorClass);
};

// функция удаления текста ошибки
const hideInputError = (input, currentInputErrorContainer, inputErrorClass, errorClass) => {
  input.classList.remove(inputErrorClass);
  currentInputErrorContainer.classList.remove(errorClass);
  currentInputErrorContainer.textContent = '';
};

// функция состояния кнопки
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

// проверка всех инпутов открытой формы на валидность
const hasInvalidInput = (formInputs) => {
  return Array.from(formInputs).some((input) => {
    return !input.validity.valid;
  }
)};

// обнуление ошибок при следующих открытиях попапа
const resetValidation = (form) => {
  form.querySelectorAll(validationConfig.inputSelector).forEach((input) => {
    const currentInputError = document.querySelector(`.popup__error_type_${input.name}`);
    if (!input.validity.valid) {
      hideInputError(input, currentInputError, validationConfig.inputErrorClass, validationConfig.errorClass);
    }
  })
}

//enableValidation(validationConfig);

