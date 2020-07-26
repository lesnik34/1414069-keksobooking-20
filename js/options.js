'use strict';

(function () {

  var ROOMS_RANGE = {
    min: 1,
    max: 1
  };
  var GUESTS_RANGE = {
    min: 1,
    max: 5
  };
  var PRICES_RANGE = {
    min: 2000,
    max: 7000
  };
  var ORDINATE = {
    start: 130,
    end: 630
  };
  var ABSCISSA = {
    start: 0,
    end: 1200
  };
  var DEFAULT_PIN_LOCATION = {
    left: 570,
    top: 375
  };
  var HOUSE_TYPE = {
    'flat': 'Квартира',
    'bungalo': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец'
  };
  var ROOMS_NUMBER_PER_GUESTS = {
    1: ['1'],
    2: ['1', '2'],
    3: ['1', '2', '3'],
    100: ['0'],
  };
  var PRICE_PER_TYPE = {
    'bungalo': 0,
    'flat': 1000,
    'house': 5000,
    'palace': 10000
  };
  var STATUS_CODE = {
    OK: 200
  };

  var PIN_WIDTH_HALF = 25;
  var PIN_HEIGHT = 70;
  var MAIN_PIN_WIDTH = 62;
  var MAIN_PIN_HEIGHT = 62;
  var MAIN_PIN_POINTER_HEIGHT = 22;
  var HOTELS_COUNT = 8;
  var TIMEOUT_IN_MS = 10000;
  var LOAD_URL = 'https://javascript.pages.academy/keksobooking/data';
  var UPLOAD_URL = 'https://javascript.pages.academy/keksobooking';
  var MAX_PINS_COUNT = 5;

  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var loadData = [];

  window.options = {
    ROOMS_RANGE: ROOMS_RANGE,
    GUESTS_RANGE: GUESTS_RANGE,
    PRICES_RANGE: PRICES_RANGE,
    ORDINATE: ORDINATE,
    ABSCISSA: ABSCISSA,
    DEFAULT_PIN_LOCATION: DEFAULT_PIN_LOCATION,
    ROOMS_NUMBER_PER_GUESTS: ROOMS_NUMBER_PER_GUESTS,
    HOUSE_TYPE: HOUSE_TYPE,
    PIN_WIDTH_HALF: PIN_WIDTH_HALF,
    PIN_HEIGHT: PIN_HEIGHT,
    MAIN_PIN_WIDTH: MAIN_PIN_WIDTH,
    MAIN_PIN_HEIGHT: MAIN_PIN_HEIGHT,
    MAIN_PIN_POINTER_HEIGHT: MAIN_PIN_POINTER_HEIGHT,
    HOTELS_COUNT: HOTELS_COUNT,
    TIMEOUT_IN_MS: TIMEOUT_IN_MS,
    LOAD_URL: LOAD_URL,
    UPLOAD_URL: UPLOAD_URL,
    STATUS_CODE: STATUS_CODE,
    PRICE_PER_TYPE: PRICE_PER_TYPE,
    MAX_PINS_COUNT: MAX_PINS_COUNT,
    FILE_TYPES: FILE_TYPES,
    loadData: loadData
  };

})();
