const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupEditButtonElement = document.querySelector('.profile__button_edit');
const popupSaveButtonElement = popupElement.querySelector('.popup__save');

const addPopup = function addPopup() {
  popupElement.classList.add('popup_is-opened');
}

const closePopup = function closePopup() {
  popupElement.classList.remove('popup_is-opened');
}

popupEditButtonElement.addEventListener("click", addPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name');
let descriptionInput = formElement.querySelector('.popup__description');

function handleFormSubmit (evt) {
     evt.preventDefault(); 
    let nameProfile = document.querySelector('.profile__name');
    let descriptionProfile = document.querySelector('.profile__description');
    nameProfile.textContent = nameInput.value;
    descriptionProfile.textContent = descriptionInput.value;
    closePopup();
}

popupSaveButtonElement.addEventListener("click", formElement.addEventListener('submit', handleFormSubmit));

 




 