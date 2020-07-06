'use strict';

(function () {

  window.map = {
    enableMap: function () {
      var map = document.querySelector('.map');
      var mapFilters = document.querySelector('.map__filters');
      var inputs = mapFilters.querySelectorAll('input');
      var selects = mapFilters.querySelectorAll('select');

      map.classList.remove('map--faded');

      window.util.enableElements(inputs);
      window.util.enableElements(selects);
    },
    disableMap: function () {
      var map = document.querySelector('.map');
      var mapFilters = document.querySelector('.map__filters');
      var inputs = mapFilters.querySelectorAll('input');
      var selects = mapFilters.querySelectorAll('select');

      map.classList.add('map--faded');

      window.util.disableElements(inputs);
      window.util.disableElements(selects);
    },
  };

})();
