'use strict';
(function () {

  window.onMouseDown = function (evt) {
    var mapPinMain = document.querySelector('.map__pin--main');
    window.dialog.onMainPinClick(evt);

    var dragged = false;
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    evt.preventDefault();

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      dragged = shift.x !== 0 || shift.y !== 0;

      var topCoordinates = mapPinMain.offsetTop - shift.y;
      var topMaxRange = window.options.ORDINATE.end - window.options.MAIN_PIN_HEIGHT - window.options.MAIN_PIN_POINTER_HEIGHT;
      var bottomMinRange = window.options.ORDINATE.start - window.options.MAIN_PIN_HEIGHT - window.options.MAIN_PIN_POINTER_HEIGHT;

      var leftCoordinates = mapPinMain.offsetLeft - shift.x;
      var leftMinRange = window.options.ABSCISSA.start - window.options.MAIN_PIN_WIDTH / 2;
      var rightMaxRange = window.options.ABSCISSA.end - window.options.MAIN_PIN_WIDTH / 2;

      if (topCoordinates >= bottomMinRange && topCoordinates <= topMaxRange) {
        mapPinMain.style.top = topCoordinates + 'px';
      }
      if (leftCoordinates >= leftMinRange && leftCoordinates <= rightMaxRange) {
        mapPinMain.style.left = leftCoordinates + 'px';
      }

      window.announcementActions.setActiveAddress();
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          mapPinMain.removeEventListener('click', onClickPreventDefault);
        };
        mapPinMain.addEventListener('click', onClickPreventDefault);
      }

      window.announcementActions.setActiveAddress();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

})();
