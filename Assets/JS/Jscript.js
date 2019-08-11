
function scrollWin(){
	window.scrollTo(0,900);
};



$(document).ready(function(){
      $('.menu-list_buttons').on('click', function(){
            $(this).removeClass("menu-list_buttons")
            $(this).addClass("onclick-button")
            $(this).text("დამატებულია");
      });




// ===== Scroll to Top ==== 


    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
