$(document).ready(function(){
	cambiaProducto( 0 );
	sliderInnit(8000);
	$(".prodTittle").click(function(){
			$(".prodTittle").removeClass("active");
			$(this).addClass("active");
			producto = $(this).attr("attrS");
			cambiaProducto( producto );
		});

  preload([
          'shared/img/beforeHover.png',
          'shared/img/afterHover.png',
          'shared/img/bgHover.png',
          'shared/img/segurosH.png',
          'shared/img/AforeH.png',
          'shared/img/InversionesH.png',
          'shared/img/creditoH.png',
          'shared/img/tpvH.png'
      ]);
  
})

function cambiaProducto ( num ) {
		var id;
		id={
			0: "prod-Seguros",
			1: "prod-Afore",
			2: "prod-Inversiones",
			3: "prod-credito",
			4: "prod-tpv"
		}

		$(".prodContent").css("width","0px");
		
		$("#"+id[num]).css("width","551px");

}

// SLIDER 
var sliderWidth;
var slide=0;
var slidesTotales;
var move;
var toGo;
var intervalo;
var slideWidth;


function sliderInnit (intervalo) {
  intervalo = setInterval (mueveAuto, intervalo );
  calcula();
  
}

function calcula () {
  slidesTotales = $("#sliderWrapper").children().length-1;
  sliderWidth=$("#slider").width();
  move=sliderWidth;
  slideWidth=sliderWidth;
  $("#sliderWrapper img").width(slideWidth);
}
$(window).resize(function(){
    calcula();
}) 
function mueveAuto () {
if (slide<slidesTotales) {
  mueve("der");
}else{
  slide=0;
  mueve("izq");
}
}

function mueve(dir){

  if (dir=="der"){

    if (slide<slidesTotales) {
      slide++;
      // $("#flechaAnt").css("display","block");
    }else{
      // $("#flechaSig").css("display","none");
    };
  }else{
    if (dir="izq") {
      if (slide > 0) {
        slide--;
        // $("#flechaSig").css("display","block");
      }else{
        // $("#flechaAnt").css("display","none");
      };
    };
  }

  toGo = -(slide*move); 

  $("#sliderWrapper").css("left",toGo);
}

// ________________________________Activo o Inactivo

// function toggleActive () {

//  for (var i=0; i < arguments.length; i++) {
//      $(arguments[i]).toggleClass("active");
//  };
 
// }



