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

    return hotel.offer.price >= priceMinRange && hotel.offer.price <= priceMaxRange
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
    var isInclude = true;

    for (var i = 0; i < housingFeatures.length; i++) {
      if (!hotel.offer.features.includes(housingFeatures[i].value)) {isInclude = false; break;}
    }

    return isInclude;
  }

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
        mapCard.remove();
      }
    },
    updatePins: function (hotels) {

      window.interactivityActions.deletePins();
      window.util.closeCard();

      var filteredHotels = hotels.filter(function (hotel) {

        if (!isTypeInclude(hotel)) {return false}
        if (!isPriceInclude(hotel)) {return false}
        if (!isRoomsInclude(hotel)) {return false}
        if (!isGuestsInclude(hotel)) {return false}

        return isFeaturesIncludes(hotel);

      });

      window.generation.renderPins(filteredHotels.slice(0, window.options.MAX_PINS_COUNT));
    }
  };

})();
