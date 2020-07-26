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
      var mapFilters = document.querySelector('.map__filters');
      var avatar = document.querySelector('#avatar');
      var images = document.querySelector('#images');

      window.announcement.enableForm();
      window.interactivity.enableMap();
      window.announcementActions.setActiveAddress();

      mapPinMain.removeEventListener('mousedown', window.dialog.onMainPinClick);
      mapPinMain.removeEventListener('keydown', window.dialog.onMapPinPressEnter);

      mapPins.addEventListener('click', window.dialog.onPinClick);
      houseType.addEventListener('change', window.dialog.onHouseTypeChange);
      timeIn.addEventListener('change', window.dialog.onTimeInChange);
      timeOut.addEventListener('change', window.dialog.onTimeOutChange);
      adFormSubmit.addEventListener('click', window.dialog.onPublishClick);
      adFormReset.addEventListener('click', window.dialog.onResetClick);
      mapFilters.addEventListener('change', window.dialog.onFiltersChange);
      avatar.addEventListener('change', window.dialog.onAvatarChange);
      images.addEventListener('change', window.dialog.onHouseImagesChange);

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
      var mapFilters = document.querySelector('.map__filters');
      var avatar = document.querySelector('#avatar');
      var images = document.querySelector('#images');

      window.interactivityActions.deletePins();
      window.announcement.disableForm();
      window.interactivity.disableMap();
      window.announcementActions.setDisabledAddress();
      window.announcementActions.changeCapacityStatus();
      window.announcementActions.activateAvailableOption();
      window.announcementActions.setDefaultAvatar();
      window.announcementActions.clearAdPhotos();
      window.interactivityActions.resetFilter();

      mapPinMain.addEventListener('mousedown', window.onMouseDown);
      mapPinMain.addEventListener('keydown', window.dialog.onMapPinPressEnter);

      mapPins.removeEventListener('click', window.dialog.onPinClick);
      houseType.removeEventListener('change', window.dialog.onHouseTypeChange);
      window.removeEventListener('keydown', window.dialog.onCardPressEsc);
      timeIn.removeEventListener('change', window.dialog.onTimeInChange);
      timeOut.removeEventListener('change', window.dialog.onTimeOutChange);
      adFormSubmit.removeEventListener('click', window.dialog.onPublishClick);
      adFormReset.removeEventListener('click', window.dialog.onResetClick);
      mapFilters.removeEventListener('onchange', window.dialog.onFiltersChange);
      avatar.removeEventListener('change', window.dialog.onAvatarChange);
      images.removeEventListener('change', window.dialog.onHouseImagesChange);
    }
  };

  window.main.deactivatePage();
  window.dialog.chainRoomNumberAmountGuests();
})();

