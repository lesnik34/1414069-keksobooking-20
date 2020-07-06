'use strict';

(function () {
  window.main = {
    activatePage: function () {
      var mapPinMain = document.querySelector('.map__pin--main');

      window.form.enableForm();
      window.map.enableMap();
      window.formActions.setActiveAddress();

      mapPinMain.removeEventListener('mousedown', window.dialog.onMainPinClick);
      mapPinMain.removeEventListener('keydown', window.dialog.onMapPinPressEnter);

      var hotels = window.data.getHotels(window.options.HOTELS_COUNT);
      window.rendering.renderPins(hotels);
    },
    deactivatePage: function () {
      var mapPinMain = document.querySelector('.map__pin--main');
      window.pin.deletePins();
      window.form.disableForm();
      window.map.disableMap();
      window.formActions.setDisabledAddress();
      window.formActions.changeCapacityStatus();
      window.formActions.activateAvailableOption();

      mapPinMain.addEventListener('mousedown', window.dialog.onMainPinClick);
      mapPinMain.addEventListener('keydown', window.dialog.onMapPinPressEnter);
    }
  };

  window.main.deactivatePage();
  window.dialog.chainRoomNumberAmountGuests();
})();

