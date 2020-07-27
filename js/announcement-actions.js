'use strict';

(function () {

  window.announcementActions = {
    setAddress: function () {
      var map = document.querySelector('.map');
      var address = document.querySelector('#address');
      var mapPinMain = document.querySelector('.map__pin--main');
      var auxiliaryNumber;

      if (map.classList.contains('map--faded')) {
        auxiliaryNumber = window.options.MAIN_PIN_HEIGHT / 2;
      } else {
        auxiliaryNumber = window.options.MAIN_PIN_HEIGHT + window.options.MAIN_PIN_POINTER_HEIGHT;
      }

      var pinAbscissa = parseInt(mapPinMain.style.left, 10);
      var pinOrdinate = parseInt(mapPinMain.style.top, 10);

      var abscissa = pinAbscissa + window.options.MAIN_PIN_WIDTH / 2;
      var ordinate = pinOrdinate + auxiliaryNumber;

      address.value = abscissa + ', ' + ordinate;
    },
    changeCapacityStatus: function () {
      var capacity = document.querySelector('#capacity');
      var capacityOptions = Array.from(capacity.querySelectorAll('option'));

      var selectedRoomsNumber = window.util.getSelectedElements();

      capacityOptions.forEach(function (element) {
        element.disabled = !window.options.ROOMS_NUMBER_PER_GUESTS[selectedRoomsNumber].includes(element.value);
      });
    },
    activateAvailableOption: function () {
      var capacity = document.querySelector('#capacity');
      var firstAvailableOption = capacity.querySelector('option:not(:disabled)');

      firstAvailableOption.selected = true;
    },
    resetAd: function () {
      var adForm = document.querySelector('.ad-form');
      var mapPinMain = document.querySelector('.map__pin--main');

      adForm.reset();
      mapPinMain.style.left = window.options.DEFAULT_PIN_LOCATION.left + 'px';
      mapPinMain.style.top = window.options.DEFAULT_PIN_LOCATION.top + 'px';
      window.announcementActions.setAddress();
      window.main.deactivatePage();
    },
    setDefaultAvatar: function () {
      var avatar = document.querySelector('.ad-form-header__preview').querySelector('img');

      avatar.src = window.options.DEFAULT_AVATAR;
    },
    clearAdPhotos: function () {
      var adFormPhoto = document.querySelector('.ad-form__photo');

      adFormPhoto.innerHTML = '';
    }
  };
})();
