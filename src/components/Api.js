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
  }
