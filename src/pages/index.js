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
  formValidators } from "../utils/constants.js";
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const popupGallery = new PopupWithImage(popupGallerySelector);

// Создание карточки
function createCardElement(element) {
  const card = new Card(element, templateSelector, popupGallery.open);
  const cardElement = card.createCard();
  return cardElement
}

const userInfo = new UserInfo({ profileNameSelector, profileDescriptionSelector });

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
})

const section = new Section(
  { items: initialCards,
  renderer: (item) => {
    const card = createCardElement(item);
    return card }},
  '.post')

const popupPost = new PopupWithForm(popupPostSelector, (data) => {
  section.addItem(data);
})

section.renderItem();
popupProfile.setEventListeners();
popupPost.setEventListeners();
popupGallery.setEventListeners();

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
