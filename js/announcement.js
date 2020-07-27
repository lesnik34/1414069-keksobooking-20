'use strict';

(function () {

  window.announcement = {
    changeFormStatus: function () {
      var adForm = document.querySelector('.ad-form');

      adForm.classList.toggle('ad-form--disabled');
    },
    changeFormElementsStatus: function () {
      var adForm = document.querySelector('.ad-form');
      var inputs = adForm.querySelectorAll('input');
      var selects = adForm.querySelectorAll('select');
      var description = adForm.querySelector('#description');
      var isFormDisabled = adForm.classList.contains('ad-form--disabled');

      if (isFormDisabled) {
        window.util.disableElements(inputs);
        window.util.disableElements(selects);
      } else {
        window.util.enableElements(inputs);
        window.util.enableElements(selects);
      }

      description.disabled = isFormDisabled;
    }
  };

})();
