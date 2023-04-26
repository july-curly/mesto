import initialCards from "./constants.js";
import Card from "./card.js";

const popupEditElement = document.querySelector('.popup-profile');
const popupAddElement = document.querySelector('.popup-post');
//const popupEditCloseButtonElement = popupEditElement.querySelector('.popup__close_edit');
//const popupAddCloseButtonElement = popupAddElement.querySelector('.popup__close_add');
const popupEditButtonElement = document.querySelector('.profile__button-edit');
const popupSaveButtonElement = document.querySelector('.popup__save');
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
//const popupGalleryCloseButtonElement = popupGallery.querySelector('.popup__close_gallery');
const closeButtons = document.querySelectorAll('.popup__close');
const inputsProfile = profileFormElement.querySelectorAll('.popup__input');
const inputsPost = postFormElement.querySelectorAll('.popup__input');
const popupSaveButtonPostElement = postFormElement.querySelector('.popup__save')

const validationConfig = {
  formSelector: document.querySelectorAll('.popup__form'),
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

// Создание карточки и установка слушателя на каждую карточку
// function createCard(item) {
//   const postElement = postTemplate.cloneNode(true);
//   const postImgElement = postElement.querySelector('.post__img');
//   postImgElement.src = item.link;
//   postImgElement.alt = item.name;
//   postElement.querySelector('.post__description').textContent = item.name;
//   setEventListeners(postElement);
//   return postElement
// }

function createNewCard(element) {
  const card = new Card(element, templateSelector, openImage);
  const cardElement = card.createCard();
  return cardElement
}

// Добавить карточки из массива
initialCards.forEach((item) => {
 // const card = new Card(item, templateSelector, openImage)
  postList.append(createNewCard(item));
 });

 class FormValidator {
  constructor(){
    
  }
 }

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
	postList.prepend(createNewCard(cardPopupData));
  submitFormEnter(popupAddElement);
  closePopup(popupAddElement);
  postFormElement.reset();
}

// открыть попап добавления карточки
const openAddCardForm = () => {
 // toggleButtonState(inputsPost, popupSaveButtonPostElement, validationConfig.inactiveButtonClass);
 // resetValidation(postFormElement);
  openPopup(popupAddElement);
}

// открыть попап ред. профиля
const openEditProfileForm = () => {
  resetValidation(profileFormElement);
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  toggleButtonState(inputsProfile, popupSaveButtonElement, validationConfig.inactiveButtonClass);
  openPopup(popupEditElement);
}

const closePopupEsc = (evt) => {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

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

