'use strict';

(function () {

  window.announcementActions = {
    setActiveAddress: function () {
      var address = document.querySelector('#address');
      var mapPinMain = document.querySelector('.map__pin--main');

      var pinAbscissa = parseInt(mapPinMain.style.left, 10);
      var pinOrdinate = parseInt(mapPinMain.style.top, 10);

      var abscissa = pinAbscissa + window.options.MAIN_PIN_WIDTH / 2;
      var ordinate = pinOrdinate + window.options.MAIN_PIN_HEIGHT + window.options.MAIN_PIN_POINTER_HEIGHT;

      address.value = abscissa + ', ' + ordinate;
    },
    setDisabledAddress: function () {
      var address = document.querySelector('#address');
      var mapPinMain = document.querySelector('.map__pin--main');

      var pinAbscissa = parseInt(mapPinMain.style.left, 10);
      var pinOrdinate = parseInt(mapPinMain.style.top, 10);

      var abscissa = pinAbscissa + window.options.MAIN_PIN_WIDTH / 2;
      var ordinate = pinOrdinate + window.options.MAIN_PIN_HEIGHT / 2;

      address.value = abscissa + ', ' + ordinate;
    },
    changeCapacityStatus: function () {
      var capacity = document.querySelector('#capacity');
      var capacityOptions = Array.from(capacity.querySelectorAll('option'));
      var roomNumber = document.querySelector('#room_number');

      var selectedElementIndex = roomNumber.selectedIndex;
      var options = roomNumber.options;
      var selectedOption = options[selectedElementIndex];
      var selectedRoomsNumber = selectedOption.value;

      capacityOptions.filter(function (element) {
        return window.options.ROOMS_NUMBER_PER_GUESTS[selectedRoomsNumber].includes(element.value);
      }).forEach(function (option) {
        option.disabled = false;
      });

      capacityOptions.filter(function (element) {
        return !window.options.ROOMS_NUMBER_PER_GUESTS[selectedRoomsNumber].includes(element.value);
      }).forEach(function (option) {
        option.disabled = true;
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
      window.announcementActions.setActiveAddress();
    }
  };
})();
