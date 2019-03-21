(function($){

    $('#btn-menu').click(function(){
        toggleResponsiveMenu()
    });
    
    function toggleResponsiveMenu(){
        $('.menu-vertival').toggleClass('menu-vertival--open')
        $('#btn-menu').toggleClass('btn-menu--open')
    }
    
    function closeResponsiveMenu(){
        $('.menu-vertival').removeClass('menu-vertival--open')
        $('#btn-menu').removeClass('btn-menu--open')
    }
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                closeResponsiveMenu()
                return false;
            }
        }
    });
    
    $("#nav").scrollspy({ activeClass: 'menu-vertival__item--active'});

})(jQuery);