(function($) {      

    $("#button-hamburger").click(function() {
        $("#button-hamburger").toggleClass('hamburger--open')
        $('.menu-horizontal').toggleClass('menu-horizontal--open')
    });

    $('#list-horizontal').click(function(event){
        let prevId = $('.subsection-active').attr('id'),
            target = $(event.target),
            idToGo = (target).attr('id')

            changePage(idToGo, prevId)
    })

    $('#list').click(function(event){

        let prevId = $('.subsection-active').attr('id'),
            target = $(event.target),
            idToGo = (target).attr('id')

        if(target.is("span")){
            idToGo = (target).parent().attr('id')
        }

        changePage(idToGo, prevId)
    })
  
    function changePage(idToGo, prevId){
        $('#'+prevId).siblings().removeClass('subsection-prev')
        $('#'+prevId).addClass('subsection-prev')
        $('#'+idToGo).siblings().removeClass('list_item-active')
        $('#'+idToGo).addClass('list_item-active')
        indexOfUnderscore = idToGo.indexOf('-')
        idToGo = idToGo.substring(0, indexOfUnderscore)
        idToGo = idToGo+'-section'
        $('#'+idToGo).siblings().removeClass('subsection-active')
        if(!$('#'+idToGo).hasClass('subsection-active'))
            $('#'+idToGo).addClass('subsection-active')
    }


    
})(jQuery);