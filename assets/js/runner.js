document.addEventListener('click', function(event) {
  if (!event.target.matches('.btn-scroll-into')) return;

  event.preventDefault();

  var element = document.getElementById(event.target.dataset.target);

  element.scrollIntoView({behavior: 'smooth'});
});


// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// function myFunction(item, index) {
//   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
// }




function filterPosts(elements) {
  elements.forEach(createPostCard);
}

function createPostCard(item, index) {
  console.log(item)
  console.log(index)

  var articleIndex = 'article-'+index;


  document.getElementById(articleIndex).innerHTML = item.title.rendered;
  document.getElementById(articleIndex).href = item.link

  // var container = document.querySelector('#articles-container');
  // var mediaLink = post._links['wp:featuredmedia'][0].href;

  // console.log(mediaLink);
  // fetch(mediaLink)
  // .then(newResponse => newResponse.json())
  // .then(function(json){
  //   var imgLink = json.guid.rendered;

  
    // container.innerHTML += '<a class="link-article section-experience-column section-experience-column--education col-12 col-lg-3" href="'+post.link+'">'+
    //                             '<div class="experience-icon article-img"><img src="'+imgLink+'" alt=""></div>'+
    //                             '<div class="experience-content">'+
    //                               '<p class="experience-title article-title">'+post.title.rendered+'</p>'+
    //                             '</div>'+
    //                         '</a>';

    // document.getElementById('section-blog').classList.remove('d-none');
  // });


}

const endpoint = 'https://weeklydev.blog//wp-json/wp/v2/posts?per_page=9';
fetch(endpoint)
    .then(response => response.json())
    .then(json => filterPosts(json));

