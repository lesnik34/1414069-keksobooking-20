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
  var ROOMS_NUMBER_PER_GUESTS = {
    1: ['1'],
    2: ['1', '2'],
    3: ['1', '2', '3'],
    100: ['0'],
  };

  var PIN_WIDTH_HALF = 25;
  var PIN_HEIGHT = 70;
  var MAIN_PIN_WIDTH = 62;
  var MAIN_PIN_HEIGHT = 62;
  var MAIN_PIN_POINTER_HEIGHT = 22;
  var TITLES = ['Краски Отель', 'Отель Оазис Зип ', 'LUNA Hotel Krasnodar', 'D Hotel', 'Отель Терем', 'Home-otel', 'Отель Коржовъ', 'Hostel on Kostyleva', 'Golden Tulip Krasnodar'];
  var TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var CHECKINS = ['12:00', '13:00', '14:00'];
  var CHECKOUTS = ['12:00', '13:00', '14:00'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var DESCRIPTION = 'Описание';
  var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  var HOTELS_COUNT = 8;

  window.options = {
    ROOMS_RANGE: ROOMS_RANGE,
    GUESTS_RANGE: GUESTS_RANGE,
    PRICES_RANGE: PRICES_RANGE,
    ORDINATE: ORDINATE,
    ABSCISSA: ABSCISSA,
    ROOMS_NUMBER_PER_GUESTS: ROOMS_NUMBER_PER_GUESTS,
    PIN_WIDTH_HALF: PIN_WIDTH_HALF,
    PIN_HEIGHT: PIN_HEIGHT,
    MAIN_PIN_WIDTH: MAIN_PIN_WIDTH,
    MAIN_PIN_HEIGHT: MAIN_PIN_HEIGHT,
    MAIN_PIN_POINTER_HEIGHT: MAIN_PIN_POINTER_HEIGHT,
    TITLES: TITLES,
    TYPES: TYPES,
    CHECKINS: CHECKINS,
    CHECKOUTS: CHECKOUTS,
    FEATURES: FEATURES,
    DESCRIPTION: DESCRIPTION,
    PHOTOS: PHOTOS,
    HOTELS_COUNT: HOTELS_COUNT
  };

})();
