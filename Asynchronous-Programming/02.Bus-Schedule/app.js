function solve() {
  const infoBox = document.querySelector('#info');
  const departBtn = document.querySelector('#depart');
  const arriveBtn = document.querySelector('#arrive');

  let currentStopId = 'depot';
  let nextStopName = '';

  function depart() {
    fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Invalid stop');
        }
        return res.json();
      })
      .then((data) => {
        nextStopName = data.name;
        currentStopId = data.next;
        infoBox.textContent = `Next stop ${nextStopName}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
      })
      .catch((error) => {
        infoBox.textContent = 'Error';
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      });
  }

  function arrive() {
    infoBox.textContent = `Arriving at ${nextStopName}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
