import './index.css';
import {
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

const popupDeleteCard = new PopupDeleteCard(popupDeleteSelector, ({element, cardId}) => {
  api.deleteCard(cardId)
  .then(() =>{
    element.removeCard();
    popupDeleteCard.close();
  })
  .catch((error) => {
    console.error(`Ошибка удаления карточки ${error}`);
  })
  .finally(() => {
    popupDeleteCard.resetLoadingText();
  })
})

// Создание карточки
function createCardElement(element) {
  const card = new Card(element, templateSelector, popupGallery.open, popupDeleteCard.open, (postLikeElement, cardId) => {
    if (postLikeElement.classList.contains('post__like_active')){
      api.deleteLike(cardId)
      .then(res => {
        card.toggleLike(res.likes)
      })
      .catch((error) => {
        console.error(`Ошибка удаления лайка ${error}`);
      });
    } else{
      api.addLike(cardId)
      .then(res => {
        card.toggleLike(res.likes)
      })
      .catch((error) => {
        console.error(`Ошибка постановки лайка ${error}`);
      });
    }
  });
  return card.createCard();
}

const userInfo = new UserInfo({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector });

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setInfo(data).then(res => {
    userInfo.setUserInfo({username: res.name, aboutme: res.about, avatar: res.avatar});
    popupProfile.close();
  })
  .catch((error) => {
    console.error(`Ошибка изменения профиля ${error}`);
  })
  .finally(() => {
    popupProfile.resetLoadingText();
  })
  })

const section = new Section(
    (item) => {
    section.addItemPrepend(createCardElement(item));
  },
  '.post'
)

const popupPost = new PopupWithForm(popupPostSelector, (data) => {
  //Promise.all([api.getInfo(), api.setCard(data)])
  api.setCard(data)
    .then((dataCard) => {
      console.log(userInfo.getId())
      dataCard.userId = userInfo.getId();
      section.addItemAppend(createCardElement(dataCard))
      popupPost.close();
  })
  .catch((error) => {
    console.error(`Ошибка добавления карточки ${error}`);
  })
  .finally(() => {
    popupPost.resetLoadingText();
  })
})

const popupAvatar = new PopupWithForm(popupAvatarSelector, (data) => {
  api.setAvatar(data).then(res => {
    userInfo.setUserInfo({ username: res.name, aboutme: res.about, avatar: res.avatar });
    popupAvatar.close();
  })
  .catch((error) => {
    console.error(`Ошибка изменения аватара ${error}`);
  })
  .finally(() => {
    popupAvatar.resetLoadingText();
  })
})

// popupProfile.setEventListeners();
// popupPost.setEventListeners();
// popupGallery.setEventListeners();
// popupAvatar.setEventListeners();
// popupDeleteCard.setEventListeners();

const popups = [popupProfile, popupPost, popupGallery, popupAvatar, popupDeleteCard];

popups.forEach(
  el => { return el.setEventListeners() }
);

// Включение валидации
Array.from(document.forms).forEach((element) => {
  const validator = new FormValidator(validationConfig, element)
  const formName = element.name;
  formValidators[formName] = validator;
  validator.enableValidation();
});

Promise.all([api.getInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    cards.forEach(item => item.userId = user._id)
    userInfo.setUserInfo({username: user.name, aboutme: user.about, avatar: user.avatar})
    userInfo.setId(user._id)
    section.renderItem(cards)
  })
  .catch((error) => {
    console.error(`Ошибка получения данных профиля ${error}`);
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

avatarEditButton.addEventListener('click', () => {
  formValidators.avatar.resetValidation();
  popupAvatar.open();
})
