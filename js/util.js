'use strict';

(function () {

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
      var housingType = document.querySelector('#housing-type');

      window.interactivityActions.deletePins();
      window.util.closeCard();

      var filteredHotels = hotels.filter(function (hotel) {

        if (housingType.value === 'any') {
          return true;
        }
        return hotel.offer.type === housingType.value;
      });

      window.generation.renderPins(filteredHotels.slice(0, window.options.MAX_PINS_COUNT));
    }
  };

})();
