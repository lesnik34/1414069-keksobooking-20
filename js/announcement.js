'use strict';

(function () {

  window.announcement = {
    enableForm: function () {
      var adForm = document.querySelector('.ad-form');
      var inputs = adForm.querySelectorAll('input');
      var selects = adForm.querySelectorAll('select');

      adForm.classList.remove('ad-form--disabled');

      window.util.enableElements(inputs);
      window.util.enableElements(selects);
    },
    disableForm: function () {
      var adForm = document.querySelector('.ad-form');
      var inputs = adForm.querySelectorAll('input');
      var selects = adForm.querySelectorAll('select');

      if (!adForm.classList.contains('ad-form--disabled')) {
        adForm.classList.add('ad-form--disabled');
      }

      window.util.disableElements(inputs);
      window.util.disableElements(selects);
    }
  };

})();
