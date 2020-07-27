'use strict';

(function () {

  window.interactivity = {

    changeMapState: function () {
      var map = document.querySelector('.map');

      map.classList.toggle('map--faded');
    },
    changeFiltersState: function () {
      var map = document.querySelector('.map');
      var mapFilters = document.querySelector('.map__filters');
      var inputs = mapFilters.querySelectorAll('input');
      var selects = mapFilters.querySelectorAll('select');

      if (map.classList.contains('map--faded')) {

        window.util.disableElements(inputs);
        window.util.disableElements(selects);
      } else {
        window.util.enableElements(inputs);
        window.util.enableElements(selects);
      }
    }
  };

})();
