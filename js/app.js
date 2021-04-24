const swup = new Swup();

$(document).ready(function() {

    if(window.location.href.includes('index')) {

        $('.leftSideNav').removeClass('leftSideNavIndex');

    }

    else {

        $('.leftSideNav').addClass('leftSideNavIndex');

    }

    swup.on('contentReplaced', function() {

        if(window.location.href.includes('index')) {

            $('.leftSideNav').removeClass('leftSideNavIndex');

        }

        else {

            $('.leftSideNav').addClass('leftSideNavIndex');

        }

        window.scrollTo(0, 0);
        
        $('.offerBox').on('click', function(){
    
            $(this).find('span').html() == '+' ? $(this).find('span').html('-') : $(this).find('span').html('+');
    
            $(this).next().stop().slideToggle();
    
        });

   });

   $('.offerBox').on('click', function(){

    $(this).find('span').html() == '+' ? $(this).find('span').html('-') : $(this).find('span').html('+');

    $(this).next().stop().slideToggle();

});

    // setTimeout(() => {

    //     $('.spinner-container').addClass('spinnerHide');

    //     $('body').addClass('overflowBody');

    // }, 2000);


    $(".subMenuMainLink").on('mouseover', function() {

        $('.subMenuMainLink ul').stop().slideDown(400);

    });

    $(".subMenuMainLink").on('mouseout', function() {

        $('.subMenuMainLink ul').stop().slideUp(400);

    });

    $(".subMenuSideLink").on('mouseover', function() {

        $('.subMenuSideLink ul').stop().slideDown();

    });

    $(".subMenuSideLink").on('mouseout', function() {

        $('.subMenuSideLink ul').stop().slideUp();

    });

    $(".mainNavLink").addClass('navLinkAnimationFirst');

    $(window).on('scroll', scrollEvents);

    $(".sideNavTrigger").on('click', function(e) {

        e.preventDefault();

        $(this).toggleClass('sideNavTriggerToggle');

        $('.sideNavigationFirstBlock').toggleClass('sideNavigationFirstBlockToggle');

        $('.sideNavigationSecondBlock').toggleClass('sideNavigationSecondBlockToggle');

    });

});


function scrollEvents() {

    let scroll = $(this).scrollTop();

        if(scroll >= 150) {

            if(window.location.href.includes('index')) {

                $('.leftSideNav').addClass('leftSideNavIndex');

            }

            $('.logoText').css("color", "#f39da8");

            $(".mainNavLink").removeClass('navLinkAnimationFirst');

            $(".mainNavLink").addClass('navLinkAnimationSecond');

            $(".mainNavigation").addClass('navChange');

        }

        else {

            if(window.location.href.includes('index')) {

                $('.leftSideNav').removeClass('leftSideNavIndex');

            }

            $('.logoText').css("color", "#f18693");

            $(".mainNavLink").addClass('navLinkAnimationFirst');

            $(".mainNavLink").removeClass('navLinkAnimationSecond');

            $(".mainNavigation").removeClass('navChange');

        }

}