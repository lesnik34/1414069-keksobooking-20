'use strict';

(function () {

  window.data = {
    getHotels: function (hotelsCount) {
      var hotels = [];

      for (var i = 1; i <= hotelsCount; i++) {
        var valueX = window.util.getRandomInRange(window.options.ABSCISSA.start, window.options.ABSCISSA.end);
        var valueY = window.util.getRandomInRange(window.options.ORDINATE.start, window.options.ORDINATE.end);

        hotels.push({
          'author': {
            'avatar': 'img/avatars/user0' + i + '.png'
          },
          'offer': {
            'title': window.util.getRandomElement(window.options.TITLES),
            'address': valueX + ', ' + valueY,
            'price': window.util.getRandomInRange(window.options.PRICES_RANGE.min, window.options.PRICES_RANGE.max),
            'type': window.util.getRandomElement(window.options.TYPES),
            'rooms': window.util.getRandomInRange(window.options.ROOMS_RANGE.min, window.options.ROOMS_RANGE.max),
            'guests': window.util.getRandomInRange(window.options.GUESTS_RANGE.min, window.options.GUESTS_RANGE.max),
            'checkin': window.util.getRandomElement(window.options.CHECKINS),
            'checkout': window.util.getRandomElement(window.options.CHECKOUTS),
            'features': window.util.getRandomArrayCopy(window.options.FEATURES),
            'description': window.options.DESCRIPTION,
            'photos': window.util.getRandomArrayCopy(window.options.PHOTOS)
          },
          'location': {
            'x': valueX,
            'y': valueY
          }
        });
      }

      return hotels;
    }
  };

})();
