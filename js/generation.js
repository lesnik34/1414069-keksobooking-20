'use strict';

(function () {

  window.generation = {
    renderPins: function (hotels) {
      var fragment = document.createDocumentFragment();
      var mapPins = document.querySelector('.map__pins');
      hotels.forEach(function (element) {
        var pin = window.interactivityActions.createPin(element);
        fragment.appendChild(pin);
      });
      mapPins.appendChild(fragment);
    },
    renderCard: function (card) {
      var mapPins = document.querySelector('.map__pins');
      var fragment = document.createDocumentFragment();
      fragment.appendChild(window.interactivityActions.createCard(card));
      mapPins.appendChild(fragment);
    },
    renderFeatures: function (cardClone, features) {
      var popupFeatures = cardClone.querySelector('.popup__features');

      popupFeatures.innerHTML = '';

      features.forEach(function (feature) {
        var featureList = document.createElement('li');
        featureList.className = 'popup__feature popup__feature--' + feature;
        popupFeatures.appendChild(featureList);
      });
    },
    addPhotos: function (photos, cardClone) {
      var PHOTO_WIDTH = 45;
      var PHOTO_HEIGHT = 40;
      var popupPhotos = cardClone.querySelector('.popup__photos');

      popupPhotos.innerHTML = '';

      photos.forEach(function (photo) {
        var housePhoto = document.createElement('img');

        housePhoto.src = photo;
        housePhoto.className = 'popup__photo';
        housePhoto.width = PHOTO_WIDTH;
        housePhoto.height = PHOTO_HEIGHT;
        housePhoto.alt = 'Фотография жилья';

        popupPhotos.appendChild(housePhoto);
      });
    },
    addFormPhotos: function (source) {
      var housePhoto = document.createElement('img');
      var adFormPhoto = document.querySelector('.ad-form__photo');
      var PHOTO_WIDTH = 70;
      var PHOTO_HEIGHT = 70;

      housePhoto.src = source;
      housePhoto.alt = 'Фотография жилья';
      housePhoto.width = PHOTO_WIDTH;
      housePhoto.height = PHOTO_HEIGHT;

      adFormPhoto.appendChild(housePhoto);
    }
  };

})();
