
// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

$(document).ready(function(){
	$('.button').each(function() {
		$(this).append('<span></span><span></span>')
	});
});

 // portfolio
 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

/* $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });
 */

// clicktoreveal
$('.cv').hide();

$(document).ready(function(){
    $("#button_cv").click(function(){
        $(".cv").slideToggle(1000);
    });
});

// clicktoreveal
$('#hide').hide();

$(document).ready(function(){
    $("#portfolio_open").click(function(){
        $("#hide").slideToggle(1000);
    });
});

//scroll/navigation

$('#about').on('click',function(){
 $( 'html, body' ).animate( {
        scrollTop: $( "#about_scroll").offset().top
      }, 2000 );
});

$('#work').on('click',function(){
 $( 'html, body' ).animate( {
        scrollTop: $( ".work").offset().top
      }, 2000 );
});

$('#contact').on('click',function(){
 $( 'html, body' ).animate( {
        scrollTop: $( ".contact").offset().top
      }, 2000 );
});

$('#home').on('click',function(){
 $( 'html, body' ).animate( {
        scrollTop: $( "#home_banner").offset().top
      }, 2000 );
});

//scrollGallery

