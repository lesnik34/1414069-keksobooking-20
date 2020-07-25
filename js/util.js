'use strict';

(function () {
  var getRank = function (hotel) {
    var housingType = document.querySelector('#housing-type');
    var rank = 0;

    if (housingType.value === hotel.offer.type) {
      rank += 2;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
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
        mapCard.remove();
      }
    },
    updatePins: function (hotels) {
      window.interactivityActions.deletePins();
      window.util.closeCard();

      var sortedHotels = hotels.slice()
        .sort(function (leftItem, rightItem) {
          var rankDiff = getRank(rightItem) - getRank(leftItem);

          if (rankDiff === 0) {
            rankDiff = namesComparator(leftItem.offer.title, rightItem.offer.title);
          }

          return rankDiff;
        });

      window.generation.renderPins(sortedHotels.slice(0, window.options.MAX_PINS_COUNT));
    }
  };

})();
