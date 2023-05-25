(()=>{"use strict";var t=document.querySelector(".profile__button-edit"),e=document.querySelector(".profile__button-add"),n=document.querySelector(".post-template").content,r={},o=document.querySelector(".profile__avatar-edit"),i={inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error"};function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function c(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var s=function(){function t(e,n,r,o,i){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"_handleDelete",(function(){u._deleteCard(u)})),c(this,"_handleLike",(function(){u._getStatusLike(u._postLikeElement,u._cardId)})),c(this,"_handleOpenImg",(function(){u._openImage(u._cardData)})),console.log(e),this._cardData=e,this._link=e.link,this._name=e.name,this._userId=e.userId,this._ownerId=e.owner._id,this._likes=e.likes,this._likesLength=e.likes.length,this._cardId=e._id,this._templateSelector=n,this._openImage=r,this._deleteCard=o,this._getStatusLike=i,this._postElement=this._templateSelector.querySelector(".post__item").cloneNode(!0),this._postDelElement=this._postElement.querySelector(".post__del"),this._postImgElement=this._postElement.querySelector(".post__img"),this._postDescription=this._postElement.querySelector(".post__description"),this._postImgElement.src=this._link,this._postImgElement.alt=this._name,this._postDescription.textContent=this._name,this._sum=this._postElement.querySelector(".post__like-sum"),this._postLikeElement=this._postElement.querySelector(".post__like")}var e,n;return e=t,(n=[{key:"toggleLike",value:function(t){this._postLikeElement.classList.toggle("post__like_active"),this._sum.textContent=t.length}},{key:"_checkLikes",value:function(){var t=this;this._likes.forEach((function(e){e._id!==e._userId||t._postLikeElement.classList.add("post__like_active")})),this._sum.textContent=this._likesLength}},{key:"_setEventListeners",value:function(){this._postDelElement.addEventListener("click",this._handleDelete),this._postLikeElement.addEventListener("click",this._handleLike),this._postImgElement.addEventListener("click",this._handleOpenImg)}},{key:"removeCard",value:function(){this._postElement.remove()}},{key:"createCard",value:function(){return this._userId!==this._ownerId&&this._postDelElement.remove(),this._checkLikes(),this._setEventListeners(),this._postElement}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n,this._formInputs=n.querySelectorAll(this._inputSelector),this._buttonElement=n.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t,e){t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){var e=this._form.querySelector(".popup__error_type_".concat(t.name));t.validity.valid?this._hideInputError(t,e):this._showInputError(t,e)}},{key:"_hasInvalidInput",value:function(){return Array.from(this._formInputs).some((function(t){return!t.validity.valid}))}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_putEventListeners",value:function(){var t=this;this._formInputs.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._putEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._formInputs.forEach((function(e){var n=t._form.querySelector(".popup__error_type_".concat(e.name));e.validity.valid||t._hideInputError(e,n)})),this._disableButton()}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var v=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"renderItem",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function _(t,e,n){return(e=g(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}var S=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),_(this,"_handleCloseButton",(function(){n.close()})),_(this,"_handleCloseOverlay",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close"),this._form=this._popup.querySelector(".popup__form")}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._handleCloseButton),this._popup.addEventListener("click",this._handleCloseOverlay)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function P(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(n);if(r){var o=O(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=k(n=o.call(this,t)),a=function(t){n._popupGalleryTitle.textContent=t.title,n._popupGalleryImg.src=t.link,n._popupGalleryImg.alt=t.title,j((e=k(n),O(i.prototype)),"open",e).call(e)},(u=P(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupGalleryImg=n._popup.querySelector(".popup-gallery__img"),n._popupGalleryTitle=n._popup.querySelector(".popup-gallery__title"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(S);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFunction=e,n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_getInputValues",value:function(){return Object.fromEntries(new FormData(this._form))}},{key:"setInputValue",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;T(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitFunction(t._getInputValues()),t.close()}))}},{key:"close",value:function(){T(B(u.prototype),"close",this).call(this),this._form.reset()}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var x=function(){function t(e){var n=e.profileNameSelector,r=e.profileDescriptionSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(n),this._descriptionElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{username:this._nameElement.textContent,aboutme:this._descriptionElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.username,n=t.aboutme,r=t.avatar;this._nameElement.textContent=e,this._descriptionElement.textContent=n,this._avatarElement.src=r}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,J(r.key),r)}}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},F.apply(this,arguments)}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}function J(t){var e=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===V(e)?e:String(e)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=G(r);if(o){var n=G(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return N(t)}(this,t)});function u(t,e){var n,r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=N(r=i.call(this,t)),c=function(t){F((n=N(r),G(u.prototype)),"open",n).call(n),r.element=t},(a=J(a="open"))in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r._submitFunction=e,r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;F(G(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitFunction(t.element)}))}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}function K(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then((function(t){if(t.ok)return t.json();Promise.reject}))}},{key:"setInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.aboutme})}).then((function(t){if(t.ok)return t.json();Promise.reject}))}},{key:"setAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar "),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){if(t.ok)return t.json();Promise.reject}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then((function(t){if(t.ok)return t.json();Promise.reject}))}},{key:"setCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.title,link:t.link})}).then((function(t){if(t.ok)return t.json();Promise.reject}))}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then((function(t){if(t.ok)return t.json();Promise.reject}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){if(t.ok)return t.json();Promise.reject}))}}])&&$(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"5887a0c5-56a4-4e48-bec1-f3083e2d9c60","Content-Type":"application/json"}}),X=new I(".popup-gallery"),Y=new H(".popup-delete-card",(function(t){t.removeCard(),Y.close()}));function Z(t){var e=new s(t,n,X.open,Y.open,(function(t,n){t.classList.contains("post__like_active")?W.deleteLike(n).then((function(t){console.log(t),e.toggleLike(t.likes)})).catch((function(t){console.error("Ошибка удаления лайка ".concat(t))})):W.addLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){console.error("Ошибка постановки лайка ".concat(t))}))}));return e.createCard()}var tt=new x({profileNameSelector:".profile__name",profileDescriptionSelector:".profile__description",profileAvatarSelector:".profile__avatar"}),et=new q(".popup-profile",(function(t){W.setInfo(t).then((function(t){tt.setUserInfo({username:t.name,aboutme:t.about,avatar:t.avatar})})).catch((function(t){console.error(t)}))})),nt=new v((function(t){nt.addItem(Z(t))}),".post"),rt=new q(".popup-post",(function(t){Promise.all([W.getInfo(),W.setCard(t)]).then((function(t){var e=K(t,2),n=e[0],r=e[1];n.userId=r._id,nt.addItem(Z(r)),rt.close()})).catch((function(t){console.error(t)}))})),ot=new q(".popup-avatar",(function(t){W.setAvatar(t).then((function(t){tt.setUserInfo({username:t.name,aboutme:t.about,avatar:t.avatar})})).catch((function(t){console.error(t)}))}));et.setEventListeners(),rt.setEventListeners(),X.setEventListeners(),ot.setEventListeners(),Y.setEventListeners(),Array.from(document.forms).forEach((function(t){var e=new y(i,t),n=t.name;r[n]=e,e.enableValidation()})),Promise.all([W.getInfo(),W.getInitialCards()]).then((function(t){var e=K(t,2),n=e[0],r=e[1];r.forEach((function(t){return t.userId=n._id})),tt.setUserInfo({username:n.name,aboutme:n.about,avatar:n.avatar}),nt.renderItem(r)})).catch((function(t){console.error(t)})),t.addEventListener("click",(function(){r.profile.resetValidation(),et.setInputValue(tt.getUserInfo()),et.open()})),e.addEventListener("click",(function(){r.post.resetValidation(),rt.open()})),o.addEventListener("click",(function(){r.avatar.resetValidation(),ot.open()}))})();