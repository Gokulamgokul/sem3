// Conversion functions
function inchesToCentimeters(inches) {
  return inches * 2.54;
}

function poundsToKilograms(pounds) {
  return pounds * 0.453592;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function squareFeetToSquareMeters(squareFeet) {
  return squareFeet * 0.092903;
}

function milesPerHourToKilometersPerHour(mph) {
  return mph * 1.60934;
}

function litersToGallons(liters) {
  return liters * 0.264172;
}

function usdToEur(usd) {
  const conversionRate = 0.85; // Example conversion rate
  return usd * conversionRate;
}

function hoursToMinutes(hours) {
  return hours * 60;
}

// Event listeners
// Length Converter
document.getElementById('length-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const inches = parseFloat(document.getElementById('inches').value);
  if (!isNaN(inches)) {
    const centimeters = inchesToCentimeters(inches);
    document.getElementById('centimeters').value = centimeters.toFixed(2);
  } else {
    document.getElementById('centimeters').value = '';
  }
});

// Weight Converter
document.getElementById('weight-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const pounds = parseFloat(document.getElementById('pounds').value);
  if (!isNaN(pounds)) {
    const kilograms = poundsToKilograms(pounds);
    document.getElementById('kilograms').value = kilograms.toFixed(2);
  } else {
    document.getElementById('kilograms').value = '';
  }
});

// Temperature Converter
document.getElementById('temperature-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  if (!isNaN(fahrenheit)) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    document.getElementById('celsius').value = celsius.toFixed(2);
  } else {
    document.getElementById('celsius').value = '';
  }
});

// Area Converter
document.getElementById('area-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const squareFeet = parseFloat(document.getElementById('square-feet').value);
  if (!isNaN(squareFeet)) {
    const squareMeters = squareFeetToSquareMeters(squareFeet);
    document.getElementById('square-meters').value = squareMeters.toFixed(2);
  } else {
    document.getElementById('square-meters').value = '';
  }
});

// Speed Converter
document.getElementById('speed-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const mph = parseFloat(document.getElementById('miles-per-hour').value);
  if (!isNaN(mph)) {
    const kph = milesPerHourToKilometersPerHour(mph);
    document.getElementById('kilometers-per-hour').value = kph.toFixed(2);
  } else {
    document.getElementById('kilometers-per-hour').value = '';
  }
});

// Volume Converter
document.getElementById('volume-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const liters = parseFloat(document.getElementById('liters').value);
  if (!isNaN(liters)) {
    const gallons = litersToGallons(liters);
    document.getElementById('gallons').value = gallons.toFixed(2);
  } else {
    document.getElementById('gallons').value = '';
  }
});

// Currency Converter
document.getElementById('currency-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const usd = parseFloat(document.getElementById('usd').value);
  if (!isNaN(usd)) {
    const eur = usdToEur(usd);
    document.getElementById('eur').value = eur.toFixed(2);
  } else {
    document.getElementById('eur').value = '';
  }
});

// Time Converter
document.getElementById('time-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const hours = parseFloat(document.getElementById('hours').value);
  if (!isNaN(hours)) {
    const minutes = hoursToMinutes(hours);
    document.getElementById('minutes').value = minutes.toFixed(2);
  } else {
    document.getElementById('minutes').value = '';
  }
});