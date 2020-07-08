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
    chainRoomNumberAmountGuests: function () {
      var roomNumber = document.querySelector('#room_number');

      roomNumber.addEventListener('change', function () {
        window.formActions.changeCapacityStatus();
        window.formActions.activateAvailableOption();
      });
    }
  };

})();
