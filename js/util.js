'use strict';

(function () {

  var isTypeInclude = function (hotel) {
    var housingType = document.querySelector('#housing-type');

    return hotel.offer.type === housingType.value || housingType.value === 'any';
  };

  var isPriceInclude = function (hotel) {
    var housingPrice = document.querySelector('#housing-price');
    var priceMinRange = window.options.HOUSING_PRICE_RANGE[housingPrice.value].min;
    var priceMaxRange = window.options.HOUSING_PRICE_RANGE[housingPrice.value].max;

    return hotel.offer.price >= priceMinRange && hotel.offer.price <= priceMaxRange;
  };

  var isRoomsInclude = function (hotel) {
    var housingRooms = document.querySelector('#housing-rooms');

    return hotel.offer.rooms.toString() === housingRooms.value || housingRooms.value === 'any';
  };

  var isGuestsInclude = function (hotel) {
    var housingGuests = document.querySelector('#housing-guests');

    return hotel.offer.guests.toString() === housingGuests.value || housingGuests.value === 'any';
  };

  var isFeaturesIncludes = function (hotel) {
    var housingFeatures = document.querySelector('#housing-features').querySelectorAll('input:checked');

    return Array.from(housingFeatures).every(function (feature) {
      return hotel.offer.features.includes(feature.value);
    });
  };

  window.util = {
    disableElements: function (elements) {
      elements.forEach(function (element) {
        element.disabled = true;
      });
    },
    enableElements: function (elements) {
      elements.forEach(function (element) {
        element.disabled = false;
      });
    },
    addDataId: function (data) {
      data.forEach(function (element, index) {
        element.dataId = index;
      });
      return data;
    },
    closeCard: function () {
      var mapCard = document.querySelector('.map__card');

      if (mapCard) {
        var currentPin = document.querySelector('.map__pin--active');

        if (currentPin) {
          currentPin.classList.remove('map__pin--active');
        }

        mapCard.remove();
      }
    },
    updatePins: function (hotels) {
      var conformityCounter = 0;
      var filteredHotels = [];

      window.interactivityActions.deletePins();
      window.util.closeCard();

      for (var i = 0; i < hotels.length; i++) {
        if (isTypeInclude(hotels[i]) && isPriceInclude(hotels[i]) && isRoomsInclude(hotels[i]) && isGuestsInclude(hotels[i]) && isFeaturesIncludes(hotels[i])) {
          conformityCounter++;
          filteredHotels.push(hotels[i]);
        }
        if (conformityCounter === window.options.MAX_PINS_COUNT) {
          break;
        }
      }

      window.generation.renderPins(filteredHotels);
    },
    getSelectedElements: function () {
      var roomNumber = document.querySelector('#room_number');

      var selectedElementIndex = roomNumber.selectedIndex;
      var options = roomNumber.options;
      var selectedOption = options[selectedElementIndex];

      return selectedOption.value;
    },
    removeFormErrors: function () {
      var requiredFields = document.querySelectorAll('input:required');

      requiredFields.forEach(function (element) {
        element.style = '';
      });
    }
  };

})();
