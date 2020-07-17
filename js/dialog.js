'use strict';

(function () {
  window.dialog = {
    onMainPinClick: function (evt) {
      if (evt.button === 0) {
        window.main.activatePage();
      }
    },
    onMapPinPressEnter: function (evt) {
      if (evt.code === 'Enter') {
        window.main.activatePage();
      }
    },
    onPinClick: function (evt) {
      var currentPin = evt.target;

      if (currentPin.dataset.pinIndex) {
        window.interactivityActions.cardActivation(currentPin);
      }
    },
    onPinPressEnter: function (evt) {
      if (evt.code === 'Enter') {
        var currentPin = evt.target.querySelector('img');

        if (currentPin.dataset.pinIndex) {
          window.interactivityActions.cardActivation(currentPin);
        }
      }
    },
    onCardCloseClick: function () {
      window.util.closeCard();
    },
    onCardPressEsc: function (evt) {
      if (evt.code === 'Escape') {
        window.util.closeCard();
      }
    },
    chainRoomNumberAmountGuests: function () {
      var roomNumber = document.querySelector('#room_number');

      roomNumber.addEventListener('change', function () {
        window.formActions.changeCapacityStatus();
        window.formActions.activateAvailableOption();
      });
    },
    onchangeHouseType: function () {
      var houseType = document.querySelector('#type');
      var housePrice = document.querySelector('#price');

      housePrice.placeholder = window.options.PRICE_PER_TYPE[houseType.value];
      housePrice.min = window.options.PRICE_PER_TYPE[houseType.value];
    },
    onchangeTimeIn: function () {
      var timeIn = document.querySelector('#timein');
      var timeOut = document.querySelector('#timeout');
      var timeValue = timeIn.value;
      var timeOutCurrentOption = timeOut.querySelector('option[value="' + timeValue + '"]');

      timeOutCurrentOption.selected = true;
    },
    onchangeTimeOut: function () {
      var timeIn = document.querySelector('#timein');
      var timeOut = document.querySelector('#timeout');
      var timeValue = timeOut.value;
      var timeInCurrentOption = timeIn.querySelector('option[value="' + timeValue + '"]');

      timeInCurrentOption.selected = true;
    }
  };

})();
