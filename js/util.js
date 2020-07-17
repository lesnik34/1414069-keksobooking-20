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
      })
      return data;
    },
    closeCard: function () {
      var mapCard = document.querySelector('.map__card');

      if (mapCard) {
        mapCard.remove();
      }
    }
  };

})();
