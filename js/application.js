$(document).ready(function() {

  $(".scroll-down").bind("mouseover", function(e){
  e.preventDefault();
  $(this).css("color", "#fed136")

});

$(".scroll-down").bind("mouseleave", function(e){
  e.preventDefault();
  $(this).css("color", "black")

});

$(".scroll-down").on("click" ,function(){
  $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

});
