function userFetcher() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';

  const userIdInput = document.getElementById('userId');
  const getUserBtn = document.getElementById('getUser');
  const resultDiv = document.getElementById('result');

  getUserBtn.addEventListener('click', () => {
    resultDiv.innerHTML = '';

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
        const name = document.createElement('li');
        name.textContent = userData.name;

        const userName = document.createElement('li');
        userName.textContent = userData.username;

        const email = document.createElement('li');
        email.textContent = userData.email;

        resultDiv.appendChild(name);
        resultDiv.appendChild(userName);
        resultDiv.appendChild(email);
      })
      .catch(() => {
        resultDiv.textContent = 'Error';
      });

    userIdInput.value = '';
  });
}

userFetcher();
