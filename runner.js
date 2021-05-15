(function () {
  function initScrollMenu() {
    document.addEventListener('click', event => {
      if (!event.target.matches('.js-btn-scroll-into')) return;
      event.preventDefault();
      let element = document.getElementById(event.target.dataset.target);
      element.scrollIntoView({behavior: 'smooth'});
    });
  }

  function showPosts() {
    const endpoint = 'https://weeklydev.blog//wp-json/wp/v2/posts?per_page=9';
    fetch(endpoint)
        .then(response => response.json())
        .then(json => filterPosts(json));
  }

  function filterPosts(elements) {
    elements.forEach(createPostCard);
    hideArticlePlaceHolder();
  }

  function createPostCard(item, index) {
    let articleIndex = `article-${index}`;
    document.getElementById(articleIndex).innerHTML = item.title.rendered;
    document.getElementById(articleIndex).href = item.link
  }

  function hideArticlePlaceHolder() {
    document.getElementById('articles-place-holder').classList.add('d-none');
  }

  initScrollMenu();
  showPosts();
})();
