'use strict';

(function () {
  window.main = {
    activatePage: function () {
      var mapPinMain = document.querySelector('.map__pin--main');
      var mapPins = document.querySelector('.map__pins');
      var houseType = document.querySelector('#type');
      var timeIn = document.querySelector('#timein');
      var timeOut = document.querySelector('#timeout');
      var adFormSubmit = document.querySelector('.ad-form__submit');
      var adFormReset = document.querySelector('.ad-form__reset');

      window.announcement.enableForm();
      window.interactivity.enableMap();
      window.announcementActions.setActiveAddress();

      mapPinMain.removeEventListener('mousedown', window.dialog.onMainPinClick);
      mapPinMain.removeEventListener('keydown', window.dialog.onMapPinPressEnter);

      mapPins.addEventListener('click', window.dialog.onPinClick);
      houseType.addEventListener('change', window.dialog.onchangeHouseType);
      timeIn.addEventListener('change', window.dialog.onchangeTimeIn);
      timeOut.addEventListener('change', window.dialog.onchangeTimeOut);
      adFormSubmit.addEventListener('click', window.dialog.onPublishClick);
      adFormReset.addEventListener('click', window.dialog.onResetClick);

      window.backend.load(window.data.loadHandler, window.data.errorHandler);
    },
    deactivatePage: function () {
      var mapPinMain = document.querySelector('.map__pin--main');
      var mapPins = document.querySelector('.map__pins');
      var houseType = document.querySelector('#type');
      var timeIn = document.querySelector('#timein');
      var timeOut = document.querySelector('#timeout');
      var adFormSubmit = document.querySelector('.ad-form__submit');
      var adFormReset = document.querySelector('.ad-form__reset');

      window.interactivityActions.deletePins();
      window.announcement.disableForm();
      window.interactivity.disableMap();
      window.announcementActions.setDisabledAddress();
      window.announcementActions.changeCapacityStatus();
      window.announcementActions.activateAvailableOption();

      mapPinMain.addEventListener('mousedown', window.onMouseDown);
      mapPinMain.addEventListener('keydown', window.dialog.onMapPinPressEnter);

      mapPins.removeEventListener('click', window.dialog.onPinClick);
      houseType.removeEventListener('change', window.dialog.onchangeHouseType);
      window.removeEventListener('keydown', window.dialog.onCardPressEsc);
      timeIn.removeEventListener('change', window.dialog.onchangeTimeIn);
      timeOut.removeEventListener('change', window.dialog.onchangeTimeOut);
      adFormSubmit.removeEventListener('click', window.dialog.onPublishClick);
      adFormReset.removeEventListener('click', window.dialog.onResetClick);
    }
  };

  window.main.deactivatePage();
  window.dialog.chainRoomNumberAmountGuests();
})();

