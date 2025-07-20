function userFetcher() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';

  const userIdInput = document.getElementById('userId');
  const getUserBtn = document.getElementById('getUser');
  const resultDiv = document.getElementById('result');

  getUserBtn.addEventListener('click', () => {
    clearElement(resultDiv);

    const id = Number(userIdInput.value);
    if (!Number.isInteger(id) || id < 1 || id > 10) {
      resultDiv.textContent = 'Please enter a number between 1 and 10.';
      return;
    }

    fetch(`${baseUrl}/${userIdInput.value}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Invalid user id!');
        }
        return res.json();
      })
      .then((userData) => {
        resultDiv.appendChild(createListElement(userData.name));
        resultDiv.appendChild(createListElement(userData.username));
        resultDiv.appendChild(createListElement(userData.email));
      })
      .catch(() => {
        resultDiv.textContent = 'Error: User not found.';
      });

    userIdInput.value = '';
  });
}

function createListElement(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}

function clearElement(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}

userFetcher();
