$( document ).ready(function() {

// animation one
(function($) {


var a2_rect = $('.two .alrededor rect'),
	a2_bajo_li = $('.two .bajo line'),
	a2_marco_base = $('.two .marco .m1'),
	a2_bajo_rect = $('.two .bajo rect'),
	a2_centro_circle = $('.two .centro circle'),
	a2_centro_rayo = $('.two .centro polyline'),
	mother = $('.two')
	tl = new TimelineMax({onComplete: anim3});

	//TweenMax.to(fondo1, 5, {backgroundPosition: "3300px 0px", ease:Linear.easeNone, repeat:-1});

	tl
	  .to(mother, 0.1, {autoAlpha:1})
	  .fromTo (a2_marco_base, 4, {autoAlpha:0, y:20}, {autoAlpha:1, y:0})
	  .staggerFrom(a2_bajo_li, 1, {autoAlpha:0, scale:1.2, y:-20, transformOrigin:"50% 50%", ease:Power1.easeOut}, 0.2)
	  .from (a2_bajo_rect, 0.2, {autoAlpha:0})
	  .from (a2_centro_circle, 1.5, {autoAlpha:0, scale:1.5, transformOrigin:"50% 50%"},  "+=2" )
	  .from (a2_centro_rayo, 1, {autoAlpha:0, scale:1.5, transformOrigin:"50% 50%"})
	  .staggerFrom(a2_rect, 0.3, {autoAlpha:0, rotation:45, scale:1.5, transformOrigin:"50% 50%", ease:Power1.easeOut}, 0.4)	  
	  .to(mother, 0.5, {autoAlpha:0, delay:1})
	  tl.duration(4).play();

})(jQuery);


// animation two
function anim2() {

	$('.animation').removeClass('on');
	$('.two').addClass('on');

var a2_rect = $('.two .alrededor rect'),
	a2_bajo_li = $('.two .bajo line'),
	a2_marco_base = $('.two .marco .m1'),
	a2_bajo_rect = $('.two .bajo rect'),
	a2_centro_circle = $('.two .centro circle'),
	a2_centro_rayo = $('.two .centro polyline'),
	mother = $('.two')
	tl = new TimelineMax({onComplete: anim3});

	//TweenMax.to(fondo1, 5, {backgroundPosition: "3300px 0px", ease:Linear.easeNone, repeat:-1});

	tl
	  .to(mother, 0.1, {autoAlpha:1})
	  .fromTo (a2_marco_base, 4, {autoAlpha:0, y:20}, {autoAlpha:1, y:0})
	  .staggerFrom(a2_bajo_li, 1, {autoAlpha:0, scale:1.2, y:-20, transformOrigin:"50% 50%", ease:Power1.easeOut}, 0.2)
	  .from (a2_bajo_rect, 0.2, {autoAlpha:0})
	  .from (a2_centro_circle, 1.5, {autoAlpha:0, scale:1.5, transformOrigin:"50% 50%"},  "+=2" )
	  .from (a2_centro_rayo, 1, {autoAlpha:0, scale:1.5, transformOrigin:"50% 50%"})
	  .staggerFrom(a2_rect, 0.3, {autoAlpha:0, rotation:45, scale:1.5, transformOrigin:"50% 50%", ease:Power1.easeOut}, 0.4)	  
	  .to(mother, 0.5, {autoAlpha:0, delay:1})
	  tl.duration(4).play();

};


// animation three

function anim3() {

	$('.animation').removeClass('on');
	$('.three').addClass('on');

var a3_bg1 = $('.three .page_bg'),
	a3_bg2 = $('.three .border'),
	a3_bg3 = $('.three .border2'),
	a3_bgWhite = $('.three .rectW'),
	a3_pageL = $('.three .page_left'),
	a3_pageR = $('.three .page_right'),
	a3_bandaA = $('.three .barras_amarillas'),
	a3_bandaB = $('.three .lineasN'),
	a3_bandaC= $('.three .lineaC'),
	a3_onLight= $('.three .light'),
	a3_pageLitem= $('.three .page_left rect'),
	a3_pageRitem= $('.three .page_right rect'),
	a3_cinta= $('.three .cinta'),
	mother = $('.three')
	tl = new TimelineMax({onComplete: anim1});

	tl
	  .to(mother, 0.1, {autoAlpha:1})
	  .from (a3_bg1, 0.2, {autoAlpha:1, y:50, scaleY:0.3, ease:Power1.easeOut})
	  .from (a3_bg2, 0.3, {autoAlpha:0, x:0, ease:Power1.easeOut})
	  .from (a3_bg3, 0.3, {autoAlpha:0, x:50, ease:Power1.easeOut})
	  .from (a3_bgWhite, 0.2, {autoAlpha:0, y:50, ease:Power1.easeOut})
	  .from (a3_pageL, 0.3, {autoAlpha:0, x:0, ease:Power1.easeOut})
	  .from (a3_pageR, 0.3, {autoAlpha:0, x:50, ease:Power1.easeOut})
	  .from (a3_bandaC, 0.3, { scaleX:0,  ease:Power1.easeOut, transformOrigin:"100% 50%"})
	  .staggerFrom(a3_bandaB, 0.2, {scaleY: 0, y:-5, ease:Power1.easeOut}, 0.2)
	  .staggerFrom(a3_bandaA, 0.3, {scaleY: 0, y:-5, ease:Power1.easeOut}, 0.2)
	  .staggerFrom(a3_onLight, 0.3, {autoAlpha:0}, .1)
	  .staggerFrom(a3_pageLitem, 0.2, {scaleX: 0, transformOrigin:"0% 50%"}, 0.1)
	  .staggerFrom(a3_pageRitem, 0.2, {scaleX: 0, transformOrigin:"100% 50%"}, 0.1)
	  .staggerFrom(a3_cinta, 0.2, {scaleY: 0, transformOrigin:"100% 0%"}, 0.3)
	  .to(mother, 0.5, {autoAlpha:0, delay:1})
	  ;
	  tl.duration(4).play();

};


// animation four

function anim4() {

	$('.animation').removeClass('on');
	$('.four').addClass('on');

var a4_patas_bajas = $('.four .patas_bajas'),
	a4_patas_ordi = $('.four .ordi_soporte'),
	a4_divisoria = $('.four .divisoria'),
	a4_pantalla = $('.four .pantalla'),
	a4_puntos = $('.four .puntos_pantalla rect'),
	a4_lamp_soporte = $('.four .lampara .soporte'),
	a4_lamp_linea1 = $('.four .lampara .linea1'),
	a4_lamp_linea2 = $('.four .lampara .linea2'),
	a4_lamp_union = $('.four .lampara .union'),
	a4_lamp_luz = $('.four .lampara .luz'),
	mother = $('.four')
	tl = new TimelineMax({onComplete: anim5});

	tl
	  .to(mother, 0.1, {autoAlpha:1})
	  .staggerFrom(a4_patas_bajas, 0.2, {scaleY: 0, y:-5, ease:Power1.easeOut, transformOrigin:"0% 100%"}, 0.2)
	  .from (a4_patas_ordi, 0.3, { scaleY:0,  ease:Power1.easeOut, transformOrigin:"0% 100%", delay: 0.2})
	  .from (a4_divisoria, 0.2, { scaleX:0,  ease:Power1.easeOut, transformOrigin:"100% 100%"})
	  .from (a4_pantalla, 0.3, { scaleY:0,  ease:Power1.easeOut, transformOrigin:"100% 0%"})
	  .staggerFrom(a4_puntos, 0.1, {autoAlpha:0, scale: 2, y:-5, ease:Power1.easeOut, transformOrigin:"50% 50%"}, 0.2)
	  .from (a4_lamp_soporte, 0.3, { scaleY:0,  ease:Power1.easeOut, transformOrigin:"0% 100%"})
	  .from (a4_lamp_linea1, 0.2, { scaleY:0,  ease:Power1.easeOut, transformOrigin:"0% 100%"})
	  .from (a4_lamp_union, 0.2, { scale:0,  ease:Power1.easeOut, transformOrigin:"50% 50%"})
	  .from (a4_lamp_linea2, 0.2, { scaleY:0,  ease:Power1.easeOut, transformOrigin:"0% 100%"})
	  .from (a4_lamp_luz, 0.3, { scaleX:0, ease:Power1.easeOut, transformOrigin:"100% 0%"})
	  .to (a4_lamp_luz, 0.1, { fill:"#F78D13"})
	  .to(mother, 0.5, {autoAlpha:0, delay:1})
	  ;
	  tl.duration(4).play();

};


// animation five

function anim5() {

	$('.animation').removeClass('on');
	$('.five').addClass('on');

var a5_mango1 = $('.five .soporte'),
	a5_mango2 = $('.five .conector'),
	a5_destelllos = $('.five .destellos rect'),
	a5_circleFond = $('.five .circleFond'),
	mother = $('.five')
	tl = new TimelineMax({onComplete: anim2});

	tl
	  .to(mother, 0.1, {autoAlpha:1})
	  .to (a5_mango1, 0.5, {fill:"#6FE6DD", ease:Power1.easeOut, delay:0.5})
	  .from (a5_circleFond, 0.2, {fill:"#ffffff", scale: 0, ease:Power1.easeOut, transformOrigin:"50% 50%"})
	  .staggerFrom(a5_destelllos, 0.2, {autoAlpha: 0, scale: 3, y:-5, ease:Power1.easeOut, delay:0.5}, 0.2)
	  .to(mother, 0.5, {autoAlpha:0, delay:1})
	  ;
	  tl.duration(4).play();
	  

};


function anim1() {

	$('.animation').removeClass('on');
	$('.one').addClass('on');

var a1_rect = $('.one.on .anim_g_3 rect'),
    a1_line = $('.one.on .anim_g_2 line'),
    a1_rectSmall = $('.one.on .anim_g_1 rect'),
    a1_circleB = $('.one.on .circleBack'),
    mother = $('.one')
	tl = new TimelineMax({onComplete: anim4});

	//TweenMax.to(fondo1, 5, {backgroundPosition: "3300px 0px", ease:Linear.easeNone, repeat:-1});

	tl
	  .to(mother, 0.1, {autoAlpha:1})
	  .from (a1_circleB, 1, {autoAlpha:0, scale: 1.5, transformOrigin:"50% 50%", ease:Power1.easeOut})
	  .staggerFrom(a1_rect, 0.3, {autoAlpha:0, rotation:45, transformOrigin:"50% 50%", ease:Power1.easeOut}, 0.3)
	  .fromTo(a1_line, 0.3, {scale:0, transformOrigin:"50% 50%"}, {scale:1, transformOrigin:"50% 50%"})
	  .staggerFrom(a1_rectSmall, 0.3, {autoAlpha:0, rotation:90, transformOrigin:"50% 50%", ease:Power1.easeOut}, 0.3)
	  .to(mother, 0.5, {autoAlpha:0, delay:1})
	  tl.duration(4).play();

};

});
