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
    }
  };

})();
