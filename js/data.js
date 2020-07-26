'use strict';

(function () {

  window.data = {
    loadHandler: function (loadData) {
      var changedData = window.util.addDataId(loadData);

      window.util.updatePins(changedData);

      window.options.loadData = changedData;
    },
    uploadHandler: function () {
      window.main.deactivatePage();
      window.announcementActions.resetAd();
      window.interactivityActions.activateSuccessMassage();

      var successMessage = document.querySelector('.success');
      successMessage.addEventListener('click', window.dialog.onSuccessClick);
      window.addEventListener('keydown', window.dialog.onSuccessPressEsc);
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
    },
    uploadErrorHandler: function () {
      window.interactivityActions.activateErrorMassage();

      var errorMessage = document.querySelector('.error');
      var errorButton = document.querySelector('.error__button');
      errorMessage.addEventListener('click', window.dialog.onErrorClick);
      errorButton.addEventListener('click', window.dialog.onErrorClick);
      window.addEventListener('keydown', window.dialog.onErrorPressEsc);

    }
  };

})();
