export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._nameElement = document.querySelector(profileNameSelector);
    this._descriptionElement = document.querySelector(profileDescriptionSelector);
  }

  getUserInfo() {
    return { username: this._nameElement.textContent, aboutme: this._descriptionElement.textContent}
  }

  setUserInfo(dataUser) {
    this._nameElement.textContent = dataUser.username;
    this._descriptionElement.textContent = dataUser.aboutme;
  }
}
