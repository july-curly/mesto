export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector }) {
    this._nameElement = document.querySelector(profileNameSelector);
    this._descriptionElement = document.querySelector(profileDescriptionSelector);
    this._avatarElement = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    //console.log(this._avatarElement.src)
    return { username: this._nameElement.textContent, aboutme: this._descriptionElement.textContent }
  }

  setUserInfo({username, aboutme, avatar}) {
    this._nameElement.textContent = username;
    this._descriptionElement.textContent = aboutme;
    this._avatarElement.src = avatar;
  }
}
