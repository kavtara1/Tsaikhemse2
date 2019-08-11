
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
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 100                       // Scroll to top of body
    }, 250);

});

});