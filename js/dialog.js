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
      if (evt.target.tagName === 'BUTTON' && evt.target.querySelector('img').dataset.pinIndex) {
        currentPin = evt.target;

        window.interactivityActions.activateCard(currentPin);
      } else if (evt.target.parentNode.tagName === 'BUTTON' && evt.target.dataset.pinIndex) {
        var currentPin = evt.target.parentNode;

        window.interactivityActions.activateCard(currentPin);
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
        window.announcementActions.changeCapacityStatus();
        window.announcementActions.activateAvailableOption();
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
