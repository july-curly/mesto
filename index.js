import initialCards from "./scripts/utils/constants.js";
import Card from "./scripts/components/Сard.js";
import FormValidator from "./scripts/components/FormValidator.js";
import Section from "./scripts/components/Section.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import UserInfo from "./scripts/components/UserInfo.js";

const popupProfileElement = document.querySelector('.popup-profile');
const popupPostElement = document.querySelector('.popup-post');
const profileOpenButton = document.querySelector('.profile__button-edit');
const postOpenButton = document.querySelector('.profile__button-add');
const nameProfile = document.querySelector('.profile__name');
const descriptionProfile = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__form');
const profileFormElement = document.querySelector('.form-profile');
const postFormElement = document.querySelector('.form-post');
const nameInput = formElement.querySelector('.popup__input_type_name');
const descriptionInput = formElement.querySelector('.popup__input_type_aboutme');
const titleInput = postFormElement.querySelector('.popup__input_type_title');
const imgInput = postFormElement.querySelector('.popup__input_type_img');
const postList =  document.querySelector('.post');
const templateSelector = document.querySelector('.post-template').content;
//const popupGallery = document.querySelector('.popup-gallery');
//const popupImageElement = popupGallery.querySelector('.popup-gallery__img');
//const popupTitleElement = popupGallery.querySelector('.popup-gallery__title');
//const closeButtons = document.querySelectorAll('.popup__close');

const popupProfileSelector = '.popup-profile';
const popupGallerySelector = '.popup-gallery';

const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error'
}

const popupGallery = new PopupWithImage(popupGallerySelector);
popupGallery.setEventListeners();

function createNewCard(element) {
  const card = new Card(element, templateSelector, popupGallery.open);
  const cardElement = card.createCard();
  return cardElement
}

const section = new Section(
  {items: initialCards,
  renderer: (item) => {
    const card = createNewCard(item);
    return card}},
  '.post')

section.renderItem();

// экземпляр класса FormValidator для попапа профиля
const profileFormValidation = new FormValidator(validationConfig, profileFormElement);
profileFormValidation.enableValidation();

// экземпляр класса FormValidator для попапа карточки
const postFormValidation = new FormValidator(validationConfig, postFormElement);
postFormValidation.enableValidation();

// Добавить карточки через модальное окно
function submitPostForm (evt) {
  evt.preventDefault();
  const cardPopupData = {
    link: imgInput.value,
    name: titleInput.value
  }
  const card = createNewCard(cardPopupData);
  postList.prepend(card);
  closePopup(popupPostElement);
  postFormElement.reset();
}

// открыть попап добавления карточки
const openPostForm = () => {
  postFormElement.reset();
  postFormValidation.resetValidation();
  //openPopup(popupPostElement);
}

// открыть попап ред. профиля
const openProfileForm = () => {
  profileFormValidation.resetValidation();
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  //popupProfile.open();
}

// функция редоктирования профиля
function submitProfileForm (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopup(popupProfileElement);
}

// слушатель событий открытия попапа ред. профиля
profileOpenButton.addEventListener('click', openProfileForm);

// слушатель событий сабмит попапа ред. профиля
formElement.addEventListener('submit', submitProfileForm);

// слушатель событий открытия попапа добавления карточки
postOpenButton.addEventListener('click', openPostForm);

// слушатель событий сабмит попапа добавления карточки
postFormElement.addEventListener('submit', submitPostForm);
