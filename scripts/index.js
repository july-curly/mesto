const popupEditElement = document.querySelector('.popup-profile');
const popupAddElement = document.querySelector('.popup-post');
const popupEditCloseButtonElement = popupEditElement.querySelector('.popup__close_edit');
const popupAddCloseButtonElement = popupAddElement.querySelector('.popup__close_add');
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
const postTemplate = document.querySelector('.post-template').content;
const popupGallery = document.querySelector('.popup-gallery');
const popupImageElement = popupGallery.querySelector('.popup-gallery__img');
const popupTitleElement = popupGallery.querySelector('.popup-gallery__title');
const popupGalleryCloseButtonElement = popupGallery.querySelector('.popup__close_gallery');
const closeButtons = document.querySelectorAll('.popup__close');



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// Создание карточки и установка слушателя на каждую карточку
function createCard(item) {
  const postElement = postTemplate.cloneNode(true);
  postElement.querySelector('.post__img').src = item.link;
  postElement.querySelector('.post__img').alt = item.name;
  postElement.querySelector('.post__description').textContent = item.name;
  setEventListeners(postElement);
  return postElement
}

// Добавить карточки из массива
initialCards.forEach((item) => {
  postList.append(createCard(item));
});

// Добавить карточки через модальное окно
function handlePostSubmit (evt) {
  evt.preventDefault();
  const cards = [];
	cards.link = imgInput.value;
  cards.name= titleInput.value;
	postList.prepend(createCard(cards));
  closePopup(popupAddElement);
  imgInput.value = '';
  titleInput.value = '';
}

// открыть попап добавления карточки
const addPopupAdd = () => {
  resetValidation(postFormElement);
  openPopup(popupAddElement);
}

// открыть попап ред. профиля
const addPopupEdit = () => {

  resetValidation(profileFormElement);
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
  openPopup(popupEditElement);
}

// функция открытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      closePopup(popup);
    }
  });

  popup.addEventListener('click', (evt) => {
    const target = evt.target;
    if (! target.closest('.popup__container')) {
    closePopup(popup);
    }
  });
}

// функция закрытия попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keypress', (evt) => {
    if( evt.key === 'Escape' ) {
      closePopup(popup);
    }
  });
}

// закрытие попапа кнопкой крестик на всех попапах
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// открытие попапа с картинкой
function openImage (evt) {
  image = evt.target.closest('.post__item');
	popupTitleElement.textContent = image.querySelector('.post__description').textContent;
  popupImageElement.src = image.querySelector('.post__img').src;
  popupImageElement.alt = image.querySelector('.post__img').alt;
  openPopup(popupGallery);
}

// функция редоктирования профиля
function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopup(popupEditElement);
}

// функция установки лайка на карточки
function handleLike (evt) {
  evt.target.classList.toggle('post__like_active');
}

// функция удаления карточки
function handleDelete (evt) {
  const card = evt.target.closest('.post__item');
	card.remove();
}

// Слушатель (удаоение, лайк, открыть картинку)событий для карточек
function setEventListeners (htmlElement) {
  htmlElement.querySelector('.post__del').addEventListener('click', handleDelete);

	htmlElement.querySelector('.post__like').addEventListener('click', handleLike);

  htmlElement.querySelector('.post__img').addEventListener("click", openImage);
}

// слушатель событий открытия попапа ред. профиля
popupEditButtonElement.addEventListener("click", addPopupEdit);

// слушатель событий сабмит попапа ред. профиля
formElement.addEventListener('submit', handleFormSubmit);

// слушатель событий открытия попапа добавления карточки
popupAddButtonElement.addEventListener("click", addPopupAdd);

// слушатель событий сабмит попапа добавления карточки
postFormElement.addEventListener('submit', handlePostSubmit);

