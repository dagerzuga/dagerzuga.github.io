$('.menu__link').click(function() {
	var getElem = $(this).attr('href');
	var targetDistance = 0;
	if ($(getElem).length) {
		var getOffset = $(getElem).offset().top;
		$('html,body').animate({
			scrollTop: getOffset - targetDistance
		}, 500);
	}
	return false;
});

const btnMenuNav = document.getElementById('navbar-button'),
	  navBar = $("#navbar"),
	  btnMenu = $(".menu__link")

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var section = document.getElementById("content");

// Get the offset position of the navbar
var sticky = section.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

  if (window.pageYOffset >= sticky) {
	navbar.classList.add("sticky")
	btnMenuNav.classList.add("box--dark")
} else {
	navbar.classList.remove("sticky");
	btnMenuNav.classList.remove("box--dark")
  }
}

btnMenuNav.onclick = function() {
	btnMenuNav.classList.toggle("cross")
	navBar.toggleClass("header__row--mobile--open")
};

$(btnMenu).on("click", () => {
	btnMenuNav.classList.toggle("cross")
	navBar.removeClass("header__row--mobile--open")
})

const grid = new Muuri('#grid', {
    layout: {
        rounding: false
    }
});


window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById("grid").classList.add('imagenes-cargadas');

    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento)=>{
        elemento.addEventListener('click', (evento)=>{
            evento.preventDefault();
            enlaces.forEach((enlace)=> enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'all' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`)
        });
    });

});