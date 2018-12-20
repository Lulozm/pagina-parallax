$(function(){

var altoSeccion = $(".seccion").outerHeight();
var tiempo =2000;

$("#btnImagenes").click(

function(e){
	$ ("html, body") .animate({scrollTop:(altoSeccion)},tiempo)
}
);
});


$(function(){

var altoSeccion = $(".seccion").outerHeight();
var tiempo =2000;

$("#btnQuienesSomos").click(

function(e){
	$ ("html, body") .animate({scrollTop:(0)},tiempo)
}
);
});


$(function(){

var altoSeccion = $(".seccion").outerHeight();
var tiempo =2000;

$("#btnEquipo").click(

function(e){
	$ ("html, body") .animate({scrollTop:(altoSeccion*2)},tiempo)
}
);
});

$(function(){

var altoSeccion = $(".seccion").outerHeight();
var tiempo =2000;

$("#btnVideos").click(

function(e){
	$ ("html, body") .animate({scrollTop:(altoSeccion*3)},tiempo) 
}
);
});



$(window).scroll(function(){
	 var mover = $(this).scrollTop();

     $("#Imagenes").css({
     "backgroundPosition" : "0 -" + mover/2 + "px"

     });
});