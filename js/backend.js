'use strict';

(function () {
  var setXHRListeners = function (elementXHR, onLoad, onError) {
    elementXHR.responseType = 'json';

    elementXHR.addEventListener('load', function () {
      if (elementXHR.status === window.options.STATUS_CODE.OK) {
        onLoad(elementXHR.response);
      } else {
        onError('Статус ответа: ' + elementXHR.status + ' ' + elementXHR.statusText);
      }
    });

    elementXHR.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    elementXHR.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + elementXHR.timeout + 'мс');
    });

    elementXHR.timeout = window.options.TIMEOUT_IN_MS;
  };

  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();

      setXHRListeners(xhr, onLoad, onError);

      xhr.open('GET', window.options.LOAD_URL);
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();

      setXHRListeners(xhr, onLoad, onError);

      xhr.open('POST', window.options.UPLOAD_URL);
      xhr.send(data);
    }
  };
})();
