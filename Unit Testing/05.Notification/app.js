function notify(message) {
  let notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display = 'block';

  notification.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  });

  notification.addEventListener('mouseover', (e) => {
    e.target.style.cursor = 'pointer';
  });
}
