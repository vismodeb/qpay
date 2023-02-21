// Owl carousel
$(document).ready(function(){
    $('.partner-carousel ').owlCarousel({
        loop:true,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:7
            }
        }
    });
    $('.card-carousel').owlCarousel({
        loop:true,
        nav:false,
        margin:25,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

  
});



// wow js
new WOW().init();
