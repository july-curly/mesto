const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const profileOpenButton = document.querySelector('.profile__button-edit');
const postOpenButton = document.querySelector('.profile__button-add');
const templateSelector = document.querySelector('.post-template').content;
const popupProfileSelector = '.popup-profile';
const popupPostSelector = '.popup-post';
const popupGallerySelector = '.popup-gallery';
const profileNameSelector = '.profile__name';
const profileDescriptionSelector = '.profile__description';
const formValidators = {};
const popupAvatarSelector = '.popup-avatar';
const popupDeleteSelector = '.popup-delete-card'

const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error'
}

export { initialCards, validationConfig, profileDescriptionSelector, profileNameSelector, popupGallerySelector, popupPostSelector,
  popupProfileSelector, templateSelector, postOpenButton, profileOpenButton, formValidators, popupAvatarSelector, popupDeleteSelector }
