$( document ).ready(function() {
    

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
  	autoplay: true,
    autoPlaySpeed: 2000,
    autoPlayTimeout: 5000,

    responsive:{
        0:{
            items:3
        },
        320:{
        	items:1
        },
        411:{
        	items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('.owl-reviews').owlCarousel({
     items:1,
    lazyLoad:true,
    loop:true,
    margin:10
})

});