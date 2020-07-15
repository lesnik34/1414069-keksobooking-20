'use strict';

(function () {
  window.main = {
    activatePage: function () {
      var mapPinMain = document.querySelector('.map__pin--main');

      window.announcement.enableForm();
      window.interactivity.enableMap();
      window.announcementActions.setActiveAddress();

      mapPinMain.removeEventListener('mousedown', window.dialog.onMainPinClick);
      mapPinMain.removeEventListener('keydown', window.dialog.onMapPinPressEnter);

      window.backend.load(window.data.loadHandler, window.data.errorHandler);
    },
    deactivatePage: function () {
      var mapPinMain = document.querySelector('.map__pin--main');
      window.interactivityActions.deletePins();
      window.announcement.disableForm();
      window.interactivity.disableMap();
      window.announcementActions.setDisabledAddress();
      window.announcementActions.changeCapacityStatus();
      window.announcementActions.activateAvailableOption();

      mapPinMain.addEventListener('mousedown', window.dialog.onMainPinClick);
      mapPinMain.addEventListener('keydown', window.dialog.onMapPinPressEnter);
    }
  };

  window.main.deactivatePage();
  window.dialog.chainRoomNumberAmountGuests();
})();

