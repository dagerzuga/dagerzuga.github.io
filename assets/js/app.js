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
    $('.menu-link').click(function(){
        elementHidden = "section--hidden"
        elementVisible = "section--front"
        elementMenu = "menu-item--selected"

        elementToShow = $(this).attr('id');
        
        $('.section').addClass(elementHidden);
        $('.section').removeClass(elementVisible);

        $("#"+elementToShow+"-section").removeClass(elementHidden);
        $("#"+elementToShow+"-section").addClass(elementVisible);

        $(".menu-link").removeClass(elementMenu)
        $("#"+elementToShow).addClass(elementMenu)
    })
    
    
    // $("#nav").scrollspy({ activeClass: 'menu-vertival__item--active'});

})(jQuery);