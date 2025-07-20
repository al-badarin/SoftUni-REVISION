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

  fetch('http://localhost:3030/jsonstore/forecaster/locations')
    .then((res) => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then((locations) => {
      const location = locations.find(
        (l) => l.name.toLowerCase() === locationInput.toLowerCase()
      );
      if (!location) throw new Error();

      const code = location.code;

      const todayReq = fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${code}`
      ).then((res) => (res.ok ? res.json() : Promise.reject()));

      const upcomingReq = fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
      ).then((res) => (res.ok ? res.json() : Promise.reject()));

      return Promise.all([todayReq, upcomingReq]);
    })
    .then(([today, upcoming]) => {
      forecastDiv.style.display = 'block';

      const forecastsDiv = document.createElement('div');
      forecastsDiv.className = 'forecasts';

      const symbolSpan = document.createElement('span');
      symbolSpan.className = 'condition symbol';
      symbolSpan.textContent = weatherSymbols[today.forecast.condition];

      const conditionSpan = document.createElement('span');
      conditionSpan.className = 'condition';

      const locSpan = document.createElement('span');
      locSpan.className = 'forecast-data';
      locSpan.textContent = today.name;

      const tempSpan = document.createElement('span');
      tempSpan.className = 'forecast-data';
      tempSpan.textContent = `${today.forecast.low}${weatherSymbols.Degrees}/${today.forecast.high}${weatherSymbols.Degrees}`;

      const condSpan = document.createElement('span');
      condSpan.className = 'forecast-data';
      condSpan.textContent = today.forecast.condition;

      conditionSpan.appendChild(locSpan);
      conditionSpan.appendChild(tempSpan);
      conditionSpan.appendChild(condSpan);

      forecastsDiv.appendChild(symbolSpan);
      forecastsDiv.appendChild(conditionSpan);
      currentDiv.appendChild(forecastsDiv);

      const forecastInfo = document.createElement('div');
      forecastInfo.className = 'forecast-info';

      upcoming.forecast.forEach((day) => {
        const upcomingSpan = document.createElement('span');
        upcomingSpan.className = 'upcoming';

        const symbol = document.createElement('span');
        symbol.className = 'symbol';
        symbol.textContent = weatherSymbols[day.condition];

        const temps = document.createElement('span');
        temps.className = 'forecast-data';
        temps.textContent = `${day.low}${weatherSymbols.Degrees}/${day.high}${weatherSymbols.Degrees}`;

        const cond = document.createElement('span');
        cond.className = 'forecast-data';
        cond.textContent = day.condition;

        upcomingSpan.appendChild(symbol);
        upcomingSpan.appendChild(temps);
        upcomingSpan.appendChild(cond);

        forecastInfo.appendChild(upcomingSpan);
      });

      upcomingDiv.appendChild(forecastInfo);
    })
    .catch(() => {
      forecastDiv.style.display = 'block';
      clearElement(currentDiv);
      clearElement(upcomingDiv);
      appendLabel(currentDiv, 'Error');
    });
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
