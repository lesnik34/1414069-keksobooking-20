'use strict';

(function () {
  var createIMG = function (numberOfObjects, cardClone) {
    var popupPhotos = cardClone.querySelector('.popup__photos');

    for (var i = 0; i < numberOfObjects - 1; i++) {
      var cloneIMG = cardClone.querySelector('.popup__photo').cloneNode();
      popupPhotos.appendChild(cloneIMG);
    }
  };

  var addPhotos = function (photos, cardClone) {
    var numberOfObjects = photos.length;

    createIMG(numberOfObjects, cardClone);
    var popupPhotos = cardClone.querySelectorAll('.popup__photo');
    popupPhotos.forEach(function (photo, index) {
      photo.src = photos[index];
    });
  };

  var deleteUnnecessaryFeatures = function (cardClone, features) {
    var popupFeatures = cardClone.querySelectorAll('.popup__feature');

    popupFeatures.forEach(function (element) {
      var necessaryFeatureName = element.classList[1].replace('popup__feature--', '');

      if (!features.find(function (feature) {
        return feature === necessaryFeatureName;
      })) {
        element.remove();
      }
    })
  };

  window.interactivityActions = {
    createPin: function (hotel) {
      var templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
      var pinClone = templatePin.cloneNode(true);
      var pinImg = pinClone.querySelector('img');
      pinClone.style.top = hotel.location.y - window.options.PIN_HEIGHT + 'px';
      pinClone.style.left = hotel.location.x - window.options.PIN_WIDTH_HALF + 'px';
      pinImg.src = hotel.author.avatar;
      pinImg.alt = hotel.offer.title;

      return pinClone;
    },
    deletePins: function () {
      var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');

      mapPins.forEach(function (element) {
        element.remove();
      });
    },
    createCard: function (card) {
      var templateCard = document.querySelector('#card').content.querySelector('.map__card');
      var cardClone = templateCard.cloneNode(true);

      var popupAvatar = cardClone.querySelector('.popup__avatar');
      var popupTitle = cardClone.querySelector('.popup__title');
      var popupTextAddress = cardClone.querySelector('.popup__text--address');
      var popupTextPrice = cardClone.querySelector('.popup__text--price');
      var popupType = cardClone.querySelector('.popup__type');
      var popupTextCapacity = cardClone.querySelector('.popup__text--capacity');
      var popupTextTime = cardClone.querySelector('.popup__text--time');
      var popupDescription = cardClone.querySelector('.popup__description');

      popupAvatar.src = card.author.avatar;
      popupTitle.textContent = card.offer.title;
      popupTextAddress.textContent = card.offer.address;
      popupTextPrice.textContent = card.offer.price + '₽/ночь';
      popupType.textContent = window.options.HOUSE_TYPE[card.offer.type];
      popupTextCapacity.textContent = card.offer.rooms + ' комнаты для ' + card.offer.guests;
      popupTextTime.textContent = 'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;
      popupDescription.textContent = card.offer.description;
      addPhotos(card.offer.photos, cardClone);
      deleteUnnecessaryFeatures(cardClone, card.offer.features);

      return cardClone;
    }
  };

})();
