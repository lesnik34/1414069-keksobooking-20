'use strict';

(function () {

  window.generation = {
    renderPins: function (hotels) {
      var fragment = document.createDocumentFragment();
      var mapPins = document.querySelector('.map__pins');
      hotels.forEach(function (element) {
        var pin = window.interactivityActions.createPin(element);
        fragment.appendChild(pin);
      });
      mapPins.appendChild(fragment);
    }
  };

})();