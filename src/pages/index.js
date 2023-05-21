import './index.css';
import { initialCards,
  validationConfig,
  profileDescriptionSelector,
  profileNameSelector,
  popupGallerySelector,
  popupPostSelector,
  popupProfileSelector,
  templateSelector,
  postOpenButton,
  profileOpenButton,
  formValidators,
  popupAvatarSelector,
  popupDeleteSelector } from "../utils/constants.js";
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupDeleteCard from '../components/PopupDeleteCard.js';

const popupGallery = new PopupWithImage(popupGallerySelector);

const popupDeleteCard = new PopupDeleteCard(popupDeleteSelector)

// Создание карточки
function createCardElement(element) {
  const card = new Card(element, templateSelector, popupGallery.open, popupDeleteCard.open);
  return card.createCard();
}

const userInfo = new UserInfo({ profileNameSelector, profileDescriptionSelector });

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
})

const section = new Section(
  { items: initialCards,
  renderer: (item) => {
    section.addItem(createCardElement(item));
  }},
  '.post')

const popupPost = new PopupWithForm(popupPostSelector, (data) => {
  section.addItem(createCardElement(data));
  popupPost.close();
})

const popupAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  document.querySelector('.profile__avatar').src = data.avatar;
})

section.renderItem();
popupProfile.setEventListeners();
popupPost.setEventListeners();
popupGallery.setEventListeners();
popupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

// Включение валидации
Array.from(document.forms).forEach((element) => {
  const validator = new FormValidator(validationConfig, element)
  const formName = element.name;
  formValidators[formName] = validator;
  validator.enableValidation();
});

// открыть попап добавления карточки
const openPostForm = () => {
  formValidators.post.resetValidation();
  popupPost.open();
}

// открыть попап ред. профиля
const openProfileForm = () => {
  formValidators.profile.resetValidation();
  popupProfile.setInputValue(userInfo.getUserInfo())
  popupProfile.open();
}

// слушатель событий открытия попапа ред. профиля
profileOpenButton.addEventListener('click', openProfileForm);

// слушатель событий открытия попапа добавления карточки
postOpenButton.addEventListener('click', openPostForm);

document.querySelector('.profile__avatar-edit').addEventListener('click', () => {
  formValidators.avatar.resetValidation();
  popupAvatar.open();
})
