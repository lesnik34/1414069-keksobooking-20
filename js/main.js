"use strict";

var TITLE = ['Краски Отель', 'Отель Оазис Зип ', 'LUNA Hotel Krasnodar', 'D Hotel', 'Отель Терем', 'Home-otel', 'Отель Коржовъ', 'Hostel on Kostyleva', 'Golden Tulip Krasnodar'];
var PRICE_RANGE = [2000, 7000];
var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS_RANGE = [1, 4];
var GUESTS_RANGE = [1, 5];
var CHECKIN = ['12:00', '13:00', '14:00'];
var CHECKOUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCRIPTION = 'Описание';
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var HOTELS_COUNT = 8;



var getHotels = function () {
  var hotels = [];
  var map = document.querySelector('.map');

  for (var i = 0; i < HOTELS_COUNT; i++){
    var valueX = getRandomInRange(50, map.offsetWidth - 50);
    var valueY = getRandomInRange(130, 630);

    hotels.push({
      'author': {
        'avatar': 'img/avatars/user0' + (i + 1) + '.png'
      },
      'offer': {
        'title': TITLE[getRandomInRange(0, TITLE.length - 1)],
        'address': valueX + ', ' + valueY,
        'price': getRandomInRange(PRICE_RANGE[0], PRICE_RANGE[1]),
        'type': TYPE[getRandomInRange(0, TYPE.length - 1)],
        'rooms': getRandomInRange(ROOMS_RANGE[0], ROOMS_RANGE[1]),
        'guests': getRandomInRange(GUESTS_RANGE[0], GUESTS_RANGE[1]),
        'checkin': CHECKIN[0, CHECKIN.length - 1],
        'checkout': CHECKOUT[0, CHECKOUT.length - 1],
        'features': getRandomArrayCopy(FEATURES),
        'description': DESCRIPTION,
        'photos': getRandomArrayCopy(PHOTOS)
      },
      'location': {
        'x': valueX,
        'y': valueY
      }
    });
  }

  return hotels;
};

var getRandomInRange = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomArrayCopy = function (items) {
  var copyItems = [];
  var randomLength = getRandomInRange(0, items.length - 1);
  for (var i = 0; i < randomLength; i++){
    copyItems[i] = items[i];
  };
  return copyItems;
};

var activateMap = function () {
  var map = document.querySelector('.map');
  map.classList.remove('.map--faded');
};

var createPin = function (hotel) {
  var templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinClone = templatePin.cloneNode(true);
  var pinImg = pinClone.querySelector('img');
  pinClone.style.top = hotel.location.y + 70 + 'px';
  pinClone.style.left = hotel.location.x + 25 + 'px';
  pinImg.src = hotel.author.avatar;
  pinImg.alt = hotel.offer.title;

  return pinClone;
};

var renderPins = function (hotels) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < hotels.length; i++) {
    var pin = createPin(hotels[i]);
    fragment.appendChild(pin);
  };
  return fragment;
};

activateMap();
var hotels = getHotels();
var fragment = renderPins(hotels);
var mapPins = document.querySelector('.map__pins');
mapPins.appendChild(fragment);
