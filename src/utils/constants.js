const profileOpenButton = document.querySelector('.profile__button-edit');
const postOpenButton = document.querySelector('.profile__button-add');
const templateSelector = document.querySelector('.post-template').content;
const popupProfileSelector = '.popup-profile';
const popupPostSelector = '.popup-post';
const popupGallerySelector = '.popup-gallery';
const profileNameSelector = '.profile__name';
const profileDescriptionSelector = '.profile__description';
const profileAvatarSelector = '.profile__avatar';
const formValidators = {};
const popupAvatarSelector = '.popup-avatar';
const popupDeleteSelector = '.popup-delete-card';
const avatarEditButton = document.querySelector('.profile__avatar-edit');

const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error'
}

export { validationConfig, profileDescriptionSelector, profileNameSelector, popupGallerySelector, popupPostSelector,
  popupProfileSelector, templateSelector, postOpenButton, profileOpenButton, formValidators, popupAvatarSelector, popupDeleteSelector, avatarEditButton, profileAvatarSelector }
