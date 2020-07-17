'use strict';

(function () {
  var addCardActions = function () {
    var map = document.querySelector('.map');
    var popupClose = document.querySelector('.popup__close');

    popupClose.addEventListener('click', window.dialog.onCardCloseClick);
    window.addEventListener('keydown', window.dialog.onCardPressEsc);
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
      pinImg.dataset.pinIndex = hotel.dataId;

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
      window.generation.addPhotos(card.offer.photos, cardClone);
      window.generation.renderFeatures(cardClone, card.offer.features);

      return cardClone;
    },
    cardActivation: function (currentPin) {
      var mapCard = document.querySelector('.map__card');

      var currentData = window.options.loadData[currentPin.dataset.pinIndex];

      if (mapCard) {
        mapCard.remove();
      }

      window.generation.renderCard(currentData);
      addCardActions();
    }
  };

})();
