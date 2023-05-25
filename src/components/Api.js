export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        Promise.reject;
      }
    });
    }

  setInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.username,
        about: data.aboutme
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        Promise.reject;
      }
    });
  }

  setAvatar(data) {
    return fetch(`${this._url}/users/me/avatar `, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    }).then(res => {
    if (res.ok) {
      return res.json();
    }
    else {
      Promise.reject;
    }
    });
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        Promise.reject;
      }
    });
  }

  setCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        Promise.reject;
      }
    });
  }

  addLike(cardId) {
    return fetch (`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        Promise.reject;
      }
    });
  }

  deleteLike(cardId) {
    return fetch (`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        Promise.reject;
      }
    });
  }
}

