
$(function(){
'use strict';
console.log('ready');

$('section nav.menu a:last').hide(); 

//$('#main form').remove();


$("#menu1").hide();
$("#menu2").hide();

$('#logo').on('click',function(){
    console.log("The logo was clicked");
   // $('section nav.menu a').hide();
   $("#menu1").show();
   $("menu2").hide();
});

$("h1").on("click",function(){
    console.log("Mouse over the title");
    $("menu2").show();
    $("#menu1").hide();

});

$("h1").on("mouseenter",function(){
    console.log("Mouse over the title");

});

$("h1").on("mouseleave",function(){
    console.log("Mouse over the title");
});


});

