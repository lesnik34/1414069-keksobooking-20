'use strict';

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

var PIN_WIDTH_HALF = 25;
var PIN_HEIGHT = 70;
var TITLES = ['Краски Отель', 'Отель Оазис Зип ', 'LUNA Hotel Krasnodar', 'D Hotel', 'Отель Терем', 'Home-otel', 'Отель Коржовъ', 'Hostel on Kostyleva', 'Golden Tulip Krasnodar'];
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var CHECKINS = ['12:00', '13:00', '14:00'];
var CHECKOUTS = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCRIPTION = 'Описание';
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var HOTELS_COUNT = 8;

var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getShuffledArray(items) {
  var newItems = items.slice();
  for (var i = newItems.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * newItems.length);
    var save = newItems[i];
    newItems[i] = newItems[j];
    newItems[j] = newItems[save];
  }

  return newItems;
}

var getRandomArrayCopy = function (items) {
  var newItems = getShuffledArray(items);
  var randomLength = getRandomInRange(1, newItems.length);
  return newItems.slice(0, randomLength);
};

var getRandomElement = function (items) {
  var randomIndex = getRandomInRange(0, items.length - 1);
  return items[randomIndex];
};

var getHotels = function (hotelsCount) {
  var hotels = [];

  for (var i = 1; i <= hotelsCount; i++) {
    var valueX = getRandomInRange(ABSCISSA.start, ABSCISSA.end);
    var valueY = getRandomInRange(ORDINATE.start, ORDINATE.end);

    hotels.push({
      'author': {
        'avatar': 'img/avatars/user0' + i + '.png'
      },
      'offer': {
        'title': getRandomElement(TITLES),
        'address': valueX + ', ' + valueY,
        'price': getRandomInRange(PRICES_RANGE.min, PRICES_RANGE.max),
        'type': getRandomElement(TYPES),
        'rooms': getRandomInRange(ROOMS_RANGE.min, ROOMS_RANGE.max),
        'guests': getRandomInRange(GUESTS_RANGE.min, GUESTS_RANGE.max),
        'checkin': getRandomElement(CHECKINS),
        'checkout': getRandomElement(CHECKOUTS),
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

var activateMap = function () {
  var map = document.querySelector('.map');
  map.classList.remove('.map--faded');
};

var createPin = function (hotel) {
  var templatePin = document.querySelector('#pin').content.querySelector('.map__pin');
  var pinClone = templatePin.cloneNode(true);
  var pinImg = pinClone.querySelector('img');
  pinClone.style.top = hotel.location.y - PIN_HEIGHT + 'px';
  pinClone.style.left = hotel.location.x - PIN_WIDTH_HALF + 'px';
  pinImg.src = hotel.author.avatar;
  pinImg.alt = hotel.offer.title;

  return pinClone;
};

var renderPins = function (hotels) {
  var fragment = document.createDocumentFragment();
  var mapPins = document.querySelector('.map__pins');
  hotels.forEach(function (element) {
    var pin = createPin(element);
    fragment.appendChild(pin);
  });
  mapPins.appendChild(fragment);
};

activateMap();
var hotels = getHotels(HOTELS_COUNT);
renderPins(hotels);

