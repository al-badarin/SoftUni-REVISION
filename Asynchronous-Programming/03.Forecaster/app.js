function attachEvents() {
  document.getElementById('submit').addEventListener('click', getWeather);

  function getWeather() {
    const locationInput = document.getElementById('location').value;
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    const weatherSymbols = {
      Sunny: '☀',
      'Partly sunny': '⛅',
      Overcast: '☁',
      Rain: '☂',
      Degrees: '°',
    };

    forecastDiv.style.display = 'none';

    clearElement(currentDiv);
    clearElement(upcomingDiv);

    appendLabel(currentDiv, 'Current conditions');
    appendLabel(upcomingDiv, 'Three-day forecast');
  }
}

function clearElement(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function appendLabel(container, text) {
  const label = document.createElement('div');
  label.className = 'label';
  label.textContent = text;
  container.appendChild(label);
}

attachEvents();
