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
  var mapPinMain = document.querySelector('.map__pin--main');

  enableForm();
  enableMap();
  setAddress();

  mapPinMain.removeEventListener('mousedown', catchLeftMouseButton);
  mapPinMain.removeEventListener('keydown', onMapPinPressEnter );

  var hotels = getHotels(HOTELS_COUNT);
  renderPins(hotels);
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

var catchLeftMouseButton = function (evt) {
  if (evt.which === 1) {
    activateMap();
  }
}

var onMapPinPressEnter = function (evt) {
  if (evt.code === 'Enter') {
    activateMap();
  }
}

var disableElements = function (elements) {
  elements.forEach((element) => {
    element.disabled = true;
  })
}

var enableElements = function (elements) {
  elements.forEach((element) => {
    element.disabled = false;
  })
}

var disableMap = function () {
  var map = document.querySelector('.map');
  var mapFilters = document.querySelector('.map__filters');
  var inputs = mapFilters.querySelectorAll('input');
  var selects = mapFilters.querySelectorAll('select');

  if (!map.classList.contains('map--faded')) {
    map.classList.add('map--faded');
  }

  disableElements(inputs);
  disableElements(selects);
}

var enableMap = function () {
  var map = document.querySelector('.map');
  var mapFilters = document.querySelector('.map__filters');
  var inputs = mapFilters.querySelectorAll('input');
  var selects = mapFilters.querySelectorAll('select');

  map.classList.remove('map--faded');

  enableElements(inputs);
  enableElements(selects);
}

var disableForm = function () {
  var adForm = document.querySelector('.ad-form');
  var inputs = adForm.querySelectorAll('input');
  var selects = adForm.querySelectorAll('select');

  if (!adForm.classList.contains('ad-form--disabled')) {
    adForm.classList.add('ad-form--disabled');
  }

  disableElements(inputs);
  disableElements(selects);
}

var enableForm = function () {
  var adForm = document.querySelector('.ad-form');
  var inputs = adForm.querySelectorAll('input');
  var selects = adForm.querySelectorAll('select');

  adForm.classList.remove('ad-form--disabled');

  enableElements(inputs);
  enableElements(selects);
}

var deactivatePage = function () {
  var mapPinMain = document.querySelector('.map__pin--main');

  disableForm();
  disableMap();
  setAddress();

  mapPinMain.addEventListener('mousedown', catchLeftMouseButton);
  mapPinMain.addEventListener('keydown', onMapPinPressEnter );
}

var getClearNumber = function (string) {
  return string.replace(/[a-z]/g, '');
}

var getPinCoordinates = function () {
  var mapPinMain = document.querySelector('.map__pin--main');

  var pinAbscissa = mapPinMain.style.left;
  var pinOrdinate = mapPinMain.style.top;

  return {
    abscissa: getClearNumber(pinAbscissa) * 1,
    ordinate: getClearNumber(pinOrdinate) * 1
  }
}

var isMapDisabled = function () {
  var map = document.querySelector('.map');

  return map.classList.contains('map--faded');
}

var getCurrentAbscissa = function () {
  return isMapDisabled() ? getPinCoordinates().abscissa + MAIN_PIN_WIDTH / 2 : getPinCoordinates().abscissa + MAIN_PIN_WIDTH / 2;
}

var getCurrentOrdinate = function () {
  return isMapDisabled() ? getPinCoordinates().ordinate + MAIN_PIN_HEIGHT / 2 : getPinCoordinates().ordinate + MAIN_PIN_HEIGHT + MAIN_PIN_POINTER_HEIGHT;
}

var setAddress = function () {
  var address = document.querySelector('#address');

  var abscissa = getCurrentAbscissa();
  var ordinate = getCurrentOrdinate();

  address.value = abscissa + ', ' + ordinate;
}

var getSelectedInput = function (elements) {
  var selectedInput;

  elements.forEach(function (element) {
    if (element.selected) {
      selectedInput = element
    }
  })

  return selectedInput;
}

var setCurrentElementsDisabled = function (chosenElement, nextElement) {
  if (Number(nextElement.value) > Number(chosenElement.value)) {
    nextElement.disabled = true;
  } else if (Number(chosenElement.value) === 100 && Number(nextElement.value) !== 0) {
    nextElement.disabled = true;
  } else if (Number(chosenElement.value) !== 100 && Number(nextElement.value) === 0) {
    nextElement.disabled = true;
  } else {
    nextElement.selected = true;
  }
}

var updateFormElement = function (nextElements, previousElements) {
  var chosenElement = getSelectedInput(previousElements);

  nextElements.forEach(function (element) {
    setCurrentElementsDisabled(chosenElement, element);
  })
}

var setElementsAble = function () {
  var capacity = document.querySelector('#capacity');
  var capacityOptions = capacity.querySelectorAll('option');

  capacityOptions.forEach((element) => element.disabled = false);
}

var changeRoomNumber = function () {
  var roomNumber = document.querySelector('#room_number');
  var roomOptions = roomNumber.querySelectorAll('option');

  var capacity = document.querySelector('#capacity');
  var capacityOptions = capacity.querySelectorAll('option');

  setElementsAble();
  updateFormElement(capacityOptions, roomOptions);

  roomNumber.addEventListener('change', function () {
    setElementsAble();
    updateFormElement(capacityOptions, roomOptions);
  })
}

deactivatePage();
changeRoomNumber();
