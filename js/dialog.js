'use strict';

(function () {
  var removeSuccessHandlers = function () {
    var successMessage = document.querySelector('.success');

    successMessage.removeEventListener('click', window.dialog.onSuccessClick);
    window.removeEventListener('keydown', window.dialog.onSuccessPressEsc);
  };

  var removeErrorHandlers = function () {
    var errorButton = document.querySelector('.error__button');
    var errorMessage = document.querySelector('.error');

    errorMessage.removeEventListener('click', window.dialog.onErrorClick);
    errorButton.removeEventListener('click', window.dialog.onErrorClick);
    window.removeEventListener('keydown', window.dialog.onErrorPressEsc);
  };

  var debouncedUpdatePins = window.debounce(window.util.updatePins);

  window.dialog = {
    onMainPinClick: function (evt) {
      var isMapDeactivated = document.querySelector('.map').classList.contains('map--faded');

      if (evt.button === 0 && isMapDeactivated) {
        window.main.activatePage();
      }
    },
    onMapPinPressEnter: function (evt) {
      var isMapDeactivated = document.querySelector('.map').classList.contains('map--faded');

      if (evt.code === 'Enter' && isMapDeactivated) {
        window.main.activatePage();
      }
    },
    onPinClick: function (evt) {
      if (evt.target.tagName === 'BUTTON' && evt.target.classList.contains('map__pin') && evt.target.querySelector('img').dataset.pinIndex) {
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
    onHouseTypeChange: function () {
      var houseType = document.querySelector('#type');
      var housePrice = document.querySelector('#price');

      housePrice.placeholder = window.options.PRICE_PER_TYPE[houseType.value];
      housePrice.min = window.options.PRICE_PER_TYPE[houseType.value];
    },
    onTimeInChange: function () {
      var timeIn = document.querySelector('#timein');
      var timeOut = document.querySelector('#timeout');
      var timeValue = timeIn.value;
      var timeOutCurrentOption = timeOut.querySelector('option[value="' + timeValue + '"]');

      timeOutCurrentOption.selected = true;
    },
    onTimeOutChange: function () {
      var timeIn = document.querySelector('#timein');
      var timeOut = document.querySelector('#timeout');
      var timeValue = timeOut.value;
      var timeInCurrentOption = timeIn.querySelector('option[value="' + timeValue + '"]');

      timeInCurrentOption.selected = true;
    },
    onPublishClick: function (evt) {
      var adForm = document.querySelector('.ad-form');
      var requiredFields = document.querySelectorAll('input:required');

      evt.preventDefault();
      window.util.removeFormErrors();

      for (var i = 0; i < requiredFields.length; i++) {
        if (!window.util.isFieldFit(requiredFields[i])) {
          requiredFields[i].style.borderColor = 'red';
          break;
        }

        if (i === requiredFields.length - 1) {
          window.backend.save(new FormData(adForm), window.data.uploadHandler, window.data.uploadErrorHandler);
        }
      }
    },
    onErrorPressEsc: function (evt) {
      var errorMessage = document.querySelector('.error');

      if (evt.code === 'Escape') {
        removeErrorHandlers();
        errorMessage.remove();
      }
    },
    onErrorClick: function (evt) {
      var errorMessage = document.querySelector('.error');

      if (evt.target === evt.currentTarget) {
        removeErrorHandlers();
        errorMessage.remove();
      }
    },
    onResetClick: function () {
      window.announcementActions.resetAd();
      window.util.closeCard();
      window.util.removeFormErrors();
    },
    onSuccessPressEsc: function (evt) {
      var successMessage = document.querySelector('.success');

      if (evt.code === 'Escape') {
        removeSuccessHandlers();
        successMessage.remove();
      }
    },
    onSuccessClick: function (evt) {
      var successMessage = document.querySelector('.success');

      if (evt.target === evt.currentTarget) {
        removeSuccessHandlers();
        successMessage.remove();
      }
    },
    onFiltersChange: function () {
      debouncedUpdatePins(window.options.loadData);
    },
    onFormImagesChange: function (evt) {
      var preview = document.querySelector('.ad-form-header__preview').querySelector('img');
      var fileChooser = evt.target;
      var file = fileChooser.files[0];
      var fileName = file.name.toLowerCase();

      var matches = window.options.FILE_TYPES.some(function (it) {
        return fileName.endsWith(it);
      });

      if (matches) {
        var reader = new FileReader();

        reader.addEventListener('load', function () {
          if (fileChooser.classList.contains('ad-form-header__input')) {
            preview.src = reader.result;
          } else {
            window.generation.addFormPhotos(reader.result);
          }
        });

        reader.readAsDataURL(file);
      }
    }
  };

})();
