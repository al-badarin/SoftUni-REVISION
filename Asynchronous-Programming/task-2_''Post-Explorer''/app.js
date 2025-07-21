function postExplorer() {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const postDropdown = document.getElementById('postSelect');
  const viewBtn = document.getElementById('viewBtn');
  const postDisplay = document.getElementById('postDisplay');

  function loadPostTitles() {
    fetch(`${baseUrl}/posts`)
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
      .catch(console.error);
  }

  viewBtn.addEventListener('click', () => {
    const postId = Number(postDropdown.value);

    clearElement(postDisplay);

    fetch(`${baseUrl}/posts/${postId}`)
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

        // load comments after post is shown
        displayPostComments(postId);
      })
      .catch(console.error);
  });

  function displayPostComments(postId) {
    fetch(`${baseUrl}/comments?postId=${postId}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((comments) => {
        const commentsHeader = document.createElement('h4');
        commentsHeader.textContent = 'Comments:';
        postDisplay.appendChild(commentsHeader);

        const commentList = document.createElement('ul');

        comments.forEach((comment) => {
          const li = document.createElement('li');
          li.textContent = `${comment.name}: ${comment.body}`;
          commentList.appendChild(li);
        });

        postDisplay.appendChild(commentList);
      })
      .catch(console.error);
  }

  function clearElement(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  }

  loadPostTitles();
}

postExplorer();
