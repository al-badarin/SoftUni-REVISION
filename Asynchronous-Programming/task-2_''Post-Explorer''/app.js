function postExplorer() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  const postDropdown = document.getElementById('postSelect');
  const viewBtn = document.getElementById('viewBtn');
  const postDisplay = document.getElementById('postDisplay');

  function loadPostTitles() {
    fetch(baseUrl)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((postsData) => {
        postsData.forEach((post) => {
          const postOption = document.createElement('option');
          postOption.value = post.id;
          postOption.textContent = post.title;
          postDropdown.appendChild(postOption);
        });
      })
      .catch(console.error());
  }

  loadPostTitles();

  viewBtn.addEventListener('click', () => {
    const postId = Number(postDropdown.value);

    fetch(`${baseUrl}/${postId}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((postData) => {
        const postTitle = document.createElement('h3');
        postTitle.textContent = postData.title;

        const postBody = document.createElement('p');
        postBody.textContent = postData.body;

        postDisplay.appendChild(postTitle);
        postDisplay.appendChild(postBody);
      })
      .catch(console.error());
  });
}

postExplorer();
