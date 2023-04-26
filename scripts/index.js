import initialCards from "./constants.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popupEditElement = document.querySelector('.popup-profile');
const popupAddElement = document.querySelector('.popup-post');
const popupEditButtonElement = document.querySelector('.profile__button-edit');
const popupAddButtonElement = document.querySelector('.profile__button-add');
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
const popupGallery = document.querySelector('.popup-gallery');
const popupImageElement = popupGallery.querySelector('.popup-gallery__img');
const popupTitleElement = popupGallery.querySelector('.popup-gallery__title');
const closeButtons = document.querySelectorAll('.popup__close');

const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error'
}

// открытие попапа с картинкой
function openImage (cardData) {
	popupTitleElement.textContent = cardData.name;
  popupImageElement.src = cardData.link;
  popupImageElement.alt = cardData.name;
  openPopup(popupGallery);
}

// Добавить карточки из массива
initialCards.forEach((item) => {
  const card = new Card(item, templateSelector, openImage)
  postList.append(card.createCard(item));
 });

// экземпляр класса FormValidator для попапа профиля
const profileFormValidation = new FormValidator(validationConfig, profileFormElement);
profileFormValidation.enableValidation();

//// экземпляр класса FormValidator для попапа карточки
const postFormValidation = new FormValidator(validationConfig, postFormElement);
postFormValidation.enableValidation();

// сабмит по enter
const submitFormEnter = (form) => {
  document.addEventListener('keypress', (evt) => {
    if( evt.key === 'Enter' ) {
      form.submit();
    }
  });
}

// Добавить карточки через модальное окно
function handlePostSubmit (evt) {
  evt.preventDefault();
  const cardPopupData = {
    link: imgInput.value,
    name: titleInput.value
  }
  const card = new Card(cardPopupData, templateSelector, openImage)
  postList.prepend(card.createCard(cardPopupData));
  submitFormEnter(popupAddElement);
  closePopup(popupAddElement);
  postFormElement.reset();
}

// открыть попап добавления карточки
const openAddCardForm = () => {
  postFormValidation.reset();
  postFormValidation.resetValidation();
  openPopup(popupAddElement);
}

// открыть попап ред. профиля
const openEditProfileForm = () => {
  profileFormValidation.resetValidation();
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  openPopup(popupEditElement);
}

// функция закрытия попапа по Esc
const closePopupEsc = (evt) => {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// функция закрытия попапа по Overlay
const closePopupOverlay = (evt) => {
  const target = evt.target;
  if (! target.closest('.popup__container')) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// функция открытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closePopupOverlay);
}

// функция закрытия попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('click', closePopupOverlay);
}

// закрытие попапа кнопкой крестик на всех попапах
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// функция редоктирования профиля
function submitEditProfileForm (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopup(popupEditElement);
}

// слушатель событий открытия попапа ред. профиля
popupEditButtonElement.addEventListener("click", openEditProfileForm);

// слушатель событий сабмит попапа ред. профиля
formElement.addEventListener('submit', submitEditProfileForm);

// слушатель событий открытия попапа добавления карточки
popupAddButtonElement.addEventListener("click", openAddCardForm);

// слушатель событий сабмит попапа добавления карточки
postFormElement.addEventListener('submit', handlePostSubmit);
