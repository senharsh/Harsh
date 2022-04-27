$(function(){
    $(".dropdown-item").click(function(){

        var icon_text=$(this).html();
      
        $(".dropdown-toggle").html(icon_text);
    })
})

$(function(){
    $("[data-trigger]").on("click", function(){
        var trigger_id =  $(this).attr('data-trigger');
        $(trigger_id).toggleClass("show");


        
        $('body').toggleClass("offcanvas-active");
    });

    // close if press ESC button 
    $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
           $(".navbar-collapse").removeClass("show");
           $("body").removeClass("overlay-active");
        }
    });

    // close button 
    $(".btn-close").click(function(e){
        $(".navbar-collapse").removeClass("show");
        $("body").removeClass("offcanvas-active");
    }); 
})