$(window).on('load',function(){
    $('.spinner').delay(800).fadeOut(3000);
   
})
$(window).scroll(function(){
    if ($(this).scrollTop()>5){
     $('header').addClass('bg-white');
     $('.nav-link').addClass('white')
    }
    else{
     $('header').removeClass('bg-white')
     $('.nav-link').removeClass('white')   
    }
})
     // when you hover a toggle show its dropdown menu
     $(".navbar .dropdown-toggle").hover(function () {
        $(this).parent().toggleClass("show");
        $(this).parent().find(".dropdown-menu").toggleClass("show");
    });

    // hide the menu when the mouse leaves the dropdown
    $(".navbar .dropdown-menu").mouseleave(function () {
        $(this).removeClass("show");
    });
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 100,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();
   