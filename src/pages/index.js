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
  popupDeleteSelector,
  avatarEditButton,
  profileAvatarSelector } from "../utils/constants.js";
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '5887a0c5-56a4-4e48-bec1-f3083e2d9c60',
    'Content-Type': 'application/json'
  }
});

const popupGallery = new PopupWithImage(popupGallerySelector);

const popupDeleteCard = new PopupDeleteCard(popupDeleteSelector, (element) => {
  element.removeCard();
  popupDeleteCard.close();
})

// Создание карточки
function createCardElement(element) {
  const card = new Card(element, templateSelector, popupGallery.open, popupDeleteCard.open);
  return card.createCard();
}

const userInfo = new UserInfo({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector });

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
})

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    section.addItem(createCardElement(item));
  }},
  '.post'
)

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

Promise.all([api.getInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    console.log(cards);
    cards.forEach(item => item.id = user._id)
    userInfo.setUserInfo({username: user.name, aboutme: user.about, avatar: user.avatar})
  })

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

avatarEditButton.addEventListener('click', () => {
  formValidators.avatar.resetValidation();
  popupAvatar.open();
})
