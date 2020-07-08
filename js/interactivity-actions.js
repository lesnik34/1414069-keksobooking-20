'use strict';

(function () {

  window.interactivityActions = {
    createPin: function (hotel) {
      var templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
      var pinClone = templatePin.cloneNode(true);
      var pinImg = pinClone.querySelector('img');
      pinClone.style.top = hotel.location.y - window.options.PIN_HEIGHT + 'px';
      pinClone.style.left = hotel.location.x - window.options.PIN_WIDTH_HALF + 'px';
      pinImg.src = hotel.author.avatar;
      pinImg.alt = hotel.offer.title;

      return pinClone;
    },
    deletePins: function () {
      var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');

      mapPins.forEach(function (element) {
        element.remove();
      });
    }
  };

})();
