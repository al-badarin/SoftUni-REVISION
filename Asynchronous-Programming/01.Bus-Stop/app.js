function getInfo() {
  const stopIdInput = document.getElementById('stopId');
  const stopNameDiv = document.getElementById('stopName');
  const busesUl = document.getElementById('buses');

  const stopId = stopIdInput.value;
  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  stopNameDiv.textContent = '';
  busesUl.innerHTML = '';

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Invalid stop ID');
      }
      return res.json();
    })
    .then((data) => {
      stopNameDiv.textContent = data.name;

      Object.entries(data.buses).forEach(([busId, time]) => {
        const li = document.createElement('li');
        li.textContent = `Bus ${busId} arrives in ${time}`;
        busesUl.appendChild(li);
      });
    })
    .catch(() => {
      stopNameDiv.textContent = 'Error';
    });
}
