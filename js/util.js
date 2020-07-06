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
    getRandomInRange: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getShuffledArray: function (items) {
      var newItems = items.slice();
      for (var i = newItems.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * newItems.length);
        var save = newItems[i];
        newItems[i] = newItems[j];
        newItems[j] = newItems[save];
      }

      return newItems;
    },
    getRandomArrayCopy: function (items) {
      var newItems = window.util.getShuffledArray(items);
      var randomLength = window.util.getRandomInRange(1, newItems.length);
      return newItems.slice(0, randomLength);
    },
    getRandomElement: function (items) {
      var randomIndex = window.util.getRandomInRange(0, items.length - 1);
      return items[randomIndex];
    }
  };

})();
