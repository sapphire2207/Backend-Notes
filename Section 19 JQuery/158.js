//Website Animations with jQuery

$("button").on("click",function(){
    $("h1").hide();
});

$("h1").show();

$("button").on("click",function(){
    $("h1").toggle();
});

$("button").on("click",function(){
    $("h1").fadeOut();
});

$("button").on("click",function(){
    $("h1").fadeIn();
});


$("button").on("click",function(){
    $("h1").fadeToggle();
});

$("button").on("click",function(){
    $("h1").slideUp();
});

$("button").on("click",function(){
    $("h1").slideDown();
});

$("button").on("click",function(){
    $("h1").SlideToggle();
});


$("button").on("click",function(){
    $("h1").animate({opacity: 0.5});
    //we shouldn't entirely change the animation
});

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});