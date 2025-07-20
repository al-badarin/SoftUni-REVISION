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

    fetch('http://localhost:3030/jsonstore/forecaster/locations')
      .then((res) => {
        if (!res.ok) throw new Error("Couldn't load any locations...");
        return res.json();
      })
      .then((locations) => {
        const location = locations.find(
          (l) => l.name.toLowerCase() === locationInput.toLowerCase()
        );
        if (!location) throw new Error('Wrong location!');

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

        forecastDiv.appendChild(symbolSpan);
        forecastDiv.appendChild(conditionSpan);
        
        currentDiv.appendChild(forecastDiv);
      });
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
