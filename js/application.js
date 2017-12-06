$(document).ready(function() {

  $("div.hidden").fadeIn(4000).removeClass('hidden');
  // $("div.firstheading").toggle( "bounce", { times: 3 }, "slow" );
  // $("div.secondheading").toggle( "bounce", { times: 3 }, "slow" );

  // $( ".headingtext" ).animate({
  //   // width: "100%",
  //   // opacity: 0.4,
  //   marginLeft: "0.2in",
  //   // fontSize: "3em",
  //   // borderWidth: "10px"
  // }, 1500 );
  // $(".headingtext").click(function() {
  //   console.log("clickkkkk")
  //   $(this).css("color", "red");
  // });


  $(".headingtext").addGlow({
    radius: 100,
    textColor: '#ffa',
    haloColor: '#ffa',
    duration: 200
  });

  $(".scroll-down").addGlow({
    radius: 10,
    textColor: '#ffa',
    haloColor: '#ffa',
    duration: 200
  });

  $("#resume-link").addGlow({
    radius: 20,
    // textColor: '#ff0',
    haloColor: '#000',
    duration: 200
  });

  $(".source-link").addGlow({
    radius: 20,
    // textColor: '#ff0',
    haloColor: '#000',
    duration: 200
  });

  $(".fa").addGlow({
    radius: 20,
    // textColor: '#ff0',
    haloColor: '#fff',
    duration: 200
  });

  $(".scroll-down").bind("mouseover", function(e){
  e.preventDefault();
  $(this).css("color", "#4c4c4c")

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

// $(".rotate").textrotator({
//   animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
//   separator: " & ", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
//   speed: 2000 // How many milliseconds until the next word show.
// });


});
