// function userFetcher() {
//   const baseUrl = 'https://jsonplaceholder.typicode.com/users';

//   const userIdInput = document.getElementById('userId');
//   const getUserBtn = document.getElementById('getUser');
//   const resultDiv = document.getElementById('result');

//   let debounceTimer = null;

//   getUserBtn.addEventListener(
//     'click',
//     () => {
//       clearTimeout(debounceTimer);
//       debounceTimer = setTimeout(() => {
//         clearElement(resultDiv);

//         // Input validation
//         const id = Number(userIdInput.value);
//         if (!Number.isInteger(id) || id < 1 || id > 10) {
//           resultDiv.textContent = 'Please enter a number between 1 and 10.';
//           return;
//         }

//         // Loading spinner
//         const loading = document.createElement('p');
//         loading.textContent = 'Loading...';
//         resultDiv.appendChild(loading);

//         fetch(`${baseUrl}/${id}`)
//           .then((res) => {
//             if (!res.ok) throw new Error();
//             return res.json();
//           })
//           .then((userData) => {
//             clearElement(resultDiv);
//             resultDiv.appendChild(createListElement(`Name: ${userData.name}`));
//             resultDiv.appendChild(
//               createListElement(`Username: ${userData.username}`)
//             );
//             resultDiv.appendChild(createListElement(`Email: ${userData.email}`));
//             userIdInput.value = '';
//           })
//           .catch(() => {
//             clearElement(resultDiv);
//             resultDiv.textContent = 'Error: User not found.';
//           });
//       });
//     },
//     400
//   );
// }

// function createListElement(text) {
//   const li = document.createElement('li');
//   li.textContent = text;
//   return li;
// }

// function clearElement(el) {
//   while (el.firstChild) el.removeChild(el.firstChild);
// }

// userFetcher();

// Async/Await syntax
async function userFetcher() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';

  const userIdInput = document.getElementById('userId');
  const getUserBtn = document.getElementById('getUser');
  const resultDiv = document.getElementById('result');

  let debounceTimer = null;

  getUserBtn.addEventListener('click', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      clearElement(resultDiv);

      // Input validation
      const id = Number(userIdInput.value);
      if (!Number.isInteger(id) || id < 1 || id > 10) {
        resultDiv.textContent = 'Please enter a number between 1 and 10.';
        return;
      }

      // Loading spinner
      const loading = document.createElement('p');
      loading.textContent = 'Loading...';
      resultDiv.appendChild(loading);

      try {
        const res = await fetch(`${baseUrl}/${id}`);
        if (!res.ok) throw new Error();

        const userData = await res.json();

        clearElement(resultDiv);
        resultDiv.appendChild(createListElement(`Name: ${userData.name}`));
        resultDiv.appendChild(
          createListElement(`Username: ${userData.username}`)
        );
        resultDiv.appendChild(createListElement(`Email: ${userData.email}`));
        userIdInput.value = '';
      } catch {
        clearElement(resultDiv);
        resultDiv.textContent = 'Error: User not found.';
      }
    }, 400);
  });

  function createListElement(text) {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  }

  function clearElement(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  }
}

userFetcher();
