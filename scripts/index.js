const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupEditButtonElement = document.querySelector('.profile__button-edit');
const popupSaveButtonElement = popupElement.querySelector('.popup__save');
let nameProfile = document.querySelector('.profile__name');
let descriptionProfile = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let descriptionInput = formElement.querySelector('.popup__input_type_aboutme');

const addPopup = function addPopup() {
  popupElement.classList.add('popup_opened');
}

const closePopup = function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
 nameProfile.textContent = nameInput.value;
 descriptionProfile.textContent = descriptionInput.value;
 closePopup();
}

popupEditButtonElement.addEventListener("click", addPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
formElement.addEventListener('submit', handleFormSubmit);






