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
      });
  }

  loadPostTitles();

  viewBtn.addEventListener('click', () => {
    const postId = Number(postDropdown.value);
    console.log('Selected post ID:', postId);
  });
}

postExplorer();
