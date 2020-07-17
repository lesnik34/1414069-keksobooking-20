'use strict';

(function () {

  window.data = {
    loadHandler: function (loadData) {
      var changedData = window.util.addDataId(loadData);

      window.generation.renderPins(changedData);
      window.options.loadData = changedData;
    },
    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';
      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };

})();
