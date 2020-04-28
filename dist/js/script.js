$('.owl-carousel').owlCarousel({
    animateIn: 'hinge',
    loop:true,
    margin:5,
    nav:true,
    dots: true,
    autoheight: true,
    items: 1,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav: true,
            loop: true
        }
    }
})