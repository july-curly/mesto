const popupElement = document.querySelector('.popup');
const popupEditElement = document.querySelector('.popup-profile');
const popupAddElement = document.querySelector('.popup-post');
const popupEditCloseButtonElement = popupEditElement.querySelector('.popup__close_edit');
const popupAddCloseButtonElement = popupAddElement.querySelector('.popup__close_add');
const popupEditButtonElement = document.querySelector('.profile__button-edit');
const popupSaveButtonElement = popupElement.querySelector('.popup__save');
const popupAddButtonElement = document.querySelector('.profile__button-add');
let nameProfile = document.querySelector('.profile__name');
let descriptionProfile = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let profileFormElement = document.querySelector('.form-profile');
let postFormElement = document.querySelector('.form-post');
let nameInput = formElement.querySelector('.popup__input_type_name');
let descriptionInput = formElement.querySelector('.popup__input_type_aboutme');
let titleInput = postFormElement.querySelector('.popup__input_type_title');
let imgInput = postFormElement.querySelector('.popup__input_type_img');
const postList =  document.querySelector('.post');
const postTemplate = document.querySelector('.post-template').content;
const popupGallery = document.querySelector('.popup-gallery');
const popupImageElement = popupGallery.querySelector('.popup-gallery__img');
const popupTitleElement = popupGallery.querySelector('.popup-gallery__title');
console.log(popupGallery);

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

initialCards.forEach(addPost)

function addPost (item) {
  const postElement = postTemplate.cloneNode(true);
  postElement.querySelector('.post__img').src = item.link;
  postElement.querySelector('.post__img').alt = item.name;
  postElement.querySelector('.post__description').textContent = item.name;

  setEventListeners(postElement);

  if (initialCards.indexOf() > initialCards.lastIndexOf){
    postList.append(postElement);
  }

  else {
    postList.prepend(postElement);
  }
}

function handlePostSubmit (evt) {
  evt.preventDefault();
  const cards = [];
	cards.link = imgInput.value;
  cards.name= titleInput.value;
	addPost(cards);
  closePopupAdd();
}

const addPopupEdit = () => {
  popupEditElement.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  descriptionInput.value = descriptionProfile.textContent;
}

const addPopupAdd = () => {
  popupAddElement.classList.add('popup_opened');
}

const closePopupEdit = () => {
  popupEditElement.classList.remove('popup_opened');
}

const closePopupAdd = () => {
  popupAddElement.classList.remove('popup_opened');
}

function openImage (evt) {
  
  //popupTitleElement.textContent = evt.target.querySelector('.post__description');
  popupImageElement.scr = evt.target.src;
  console.log(popupImageElement.scr);
  popupGallery.classList.add('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  descriptionProfile.textContent = descriptionInput.value;
  closePopupEdit();
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
popupEditCloseButtonElement.addEventListener("click", closePopupEdit);
formElement.addEventListener('submit', handleFormSubmit);

popupAddButtonElement.addEventListener("click", addPopupAdd);
popupAddCloseButtonElement.addEventListener("click", closePopupAdd);
postFormElement.addEventListener('submit', handlePostSubmit);


