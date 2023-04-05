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
const popupOpened = document.querySelector('.popup_opened')


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

function createCard(item) {
  const postElement = postTemplate.cloneNode(true);
  postElement.querySelector('.post__img').src = item.link;
  postElement.querySelector('.post__img').alt = item.name;
  postElement.querySelector('.post__description').textContent = item.name;
  setEventListeners(postElement);
return postElement
}

initialCards.forEach((item) => {
  postList.append(createCard(item));
});

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

const addPopupAdd = () => {
  openPopup(popupAddElement);
}

const addPopupEdit = () => {
  openPopup(popupEditElement);
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
}

const closePopupKey = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(popupOpened);
  }
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closePopupKey);

  popup.addEventListener('click', (evt) => {
    const target = evt.target;
    if (! target.closest('.popup__container')) {
    closePopup(popup);
    }
  });
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keypress', closePopupKey);
}

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function openImage (evt) {
  image = evt.target.closest('.post__item');
	popupTitleElement.textContent = image.querySelector('.post__description').textContent;
  popupImageElement.src = image.querySelector('.post__img').src;
  popupImageElement.alt = image.querySelector('.post__img').alt;
  openPopup(popupGallery);
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopup(popupEditElement);
}

function handleLike (evt) {
  evt.target.classList.toggle('post__like_active');
}

function handleDelete (evt) {
  const card = evt.target.closest('.post__item');
	card.remove();
}

function setEventListeners (htmlElement) {
  htmlElement.querySelector('.post__del').addEventListener('click', handleDelete);

	htmlElement.querySelector('.post__like').addEventListener('click', handleLike);

  htmlElement.querySelector('.post__img').addEventListener("click", openImage);
}

popupEditButtonElement.addEventListener("click", addPopupEdit);
formElement.addEventListener('submit', handleFormSubmit);

popupAddButtonElement.addEventListener("click", addPopupAdd);
postFormElement.addEventListener('submit', handlePostSubmit);

