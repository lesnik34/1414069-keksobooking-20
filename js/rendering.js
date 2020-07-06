'use strict';

(function () {

  window.rendering = {
    renderPins: function (hotels) {
      var fragment = document.createDocumentFragment();
      var mapPins = document.querySelector('.map__pins');
      hotels.forEach(function (element) {
        var pin = window.pin.createPin(element);
        fragment.appendChild(pin);
      });
      mapPins.appendChild(fragment);
    }
  };

})();
