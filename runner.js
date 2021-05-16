(function () {

  function initExperienceButtons() {
    let anchors = document.getElementsByClassName('js-experience-button');
    for (let i = 0; i < anchors.length; i++) {
        let element = anchors[i];
        element.onclick = function() {
          let containerIndex = element.getAttribute('data-experience');
          let containerId = `experience-expansion-${containerIndex}`;
          let mainContainer = document.getElementById('experience-expansion');
          let containerSelected = document.getElementById(containerId);
          let isOpen = containerSelected.classList.contains('experience-expansion__content--opened');

          if (isOpen) {
            containerSelected.classList.remove('experience-expansion__content--opened');
            mainContainer.classList.remove('experience-expansion--opened');
            mainContainer.style.height = `0`;
          } else {
            hideExperienceContainers();
            mainContainer.classList.add('experience-expansion--opened');
            containerSelected.classList.add('experience-expansion__content--opened');
            updateContainerHeight();
          }
        };
    }
  }

  function hideExperienceContainers() {
    elements = document.getElementsByClassName('experience-expansion__content');
    for(let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('experience-expansion__content--opened');
    }
  }

  function updateContainerHeight() {
    let containerSelected = document.querySelector('.experience-expansion__content--opened') || null;
    if (containerSelected) {
      let height = containerSelected.offsetHeight;
      let container = document.querySelector('.experience-expansion--opened');
      container.style.height = `${height}px`;
    }
  }

  // -----

  function removeActiveBullet() {
    document.querySelector('.education-indicator--active').classList.remove('education-indicator--active')
  }

  function removeActiveRow() {
    document.querySelector('.education-row--active').classList.remove('education-row--active')
  }

  function addActiveRow(button) {
    button.classList.add('education-indicator--active');
    let rowSelected = button.getAttribute('data-education-indicator');
    document.querySelector(`#education-row-${rowSelected}`).classList.add('education-row--active');
  }

  function initEducationButtons() {
    let elements = document.getElementsByClassName('js-education-button');
    for (let i = 0; i < elements.length; i++) {
      let button = elements[i];
      button.onclick = function() {
        removeActiveBullet();
        removeActiveRow();
        addActiveRow(button);
        setEducationContainerHeight();
      };
    }
  }

  function setEducationContainerHeight() {
    let containerSelected = document.querySelector('.education-row--active');
    let height = containerSelected.offsetHeight;
    let container = document.querySelector('.js-container-education');
    container.style.height = `${height}px`;
  }

  // -----

  function initScrollMenu() {
    document.addEventListener('click', event => {
      if (!event.target.matches('.js-btn-scroll-into')) return;
      event.preventDefault();
      let element = document.getElementById(event.target.dataset.target);
      element.scrollIntoView({behavior: 'smooth'});
    });
  }

  // -----

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

  // -----

  initScrollMenu();
  initExperienceButtons();
  initEducationButtons();
  setEducationContainerHeight();
  showPosts();

  window.onresize = function() {
    updateContainerHeight()
    setEducationContainerHeight();
  };

})();
