document.addEventListener('click', function(event) {
  if (!event.target.matches('.btn-scroll-into')) return;
  event.preventDefault();
  var element = document.getElementById(event.target.dataset.target);
  element.scrollIntoView({behavior: 'smooth'});
});




function filterPosts(elements) {
  elements.forEach(createPostCard);
}

function createPostCard(item, index) {
  var articleIndex = 'article-'+index;
  document.getElementById(articleIndex).innerHTML = item.title.rendered;
  document.getElementById(articleIndex).href = item.link
}

const endpoint = 'https://weeklydev.blog//wp-json/wp/v2/posts?per_page=9';
fetch(endpoint)
    .then(response => response.json())
    .then(json => filterPosts(json));
