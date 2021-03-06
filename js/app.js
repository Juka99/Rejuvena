const swup = new Swup();

$(document).ready(function() {

    $("#backToTop").on('click', function() {

        window.scrollTo(0, 0);
        
    })

    if(document.querySelector('.codeRejuvenaButton') != null) {

        loyaltyCodeCheck();

        // Get loyalty code

        document.querySelector('.codeRejuvenaButton').addEventListener('click', function() {

            let codeValue = document.getElementById('codeField').value;

            if(codeValue == "" || codeValue != "rejuvena2021") {

                $("#codeInvalid").show();

            }

            else {

                $("#codeInvalid").hide();

                if(localStorage) {

                    localStorage.setItem("rejuvenaCode", "approved");

                    loyaltyCodeCheck();

                }

                else {

                    alert("Vaš pretraživač je previše star, molimo vas ažurirajte ga");

                }

            }

        });

    }

    //////

    // Prikaz loadera u zavinsosti od vremena

    loaderShow();

    //////////////

    if(window.location.href.includes('index')) {

        $('.leftSideNav').removeClass('leftSideNavIndex');

    }

    else {

        $('.leftSideNav').addClass('leftSideNavIndex');

    }

    swup.on('contentReplaced', function() {

        // Rejuvena Loyalty CLub

        if(document.querySelector('.codeRejuvenaButton') != null) {

            loyaltyCodeCheck();
    
            // Get loyalty code
    
            document.querySelector('.codeRejuvenaButton').addEventListener('click', function() {
    
                let codeValue = document.getElementById('codeField').value;
    
                if(codeValue == "" || codeValue != "rejuvena2021") {
    
                    $("#codeInvalid").show();
    
                }
    
                else {
    
                    $("#codeInvalid").hide();
    
                    if(localStorage) {
    
                        localStorage.setItem("rejuvenaCode", "approved");
    
                        loyaltyCodeCheck();
    
                    }
    
                    else {
    
                        alert("Vaš pretraživač je previše star, molimo vas ažurirajte ga");
    
                    }
    
                }
    
            });
    
        }

        loaderShow();

        if(window.location.href.includes('index')) {

            $('.leftSideNav').removeClass('leftSideNavIndex');

        }

        else {

            $('.leftSideNav').addClass('leftSideNavIndex');

        }

        window.scrollTo(0, 0);

        $("#backToTop").on('click', function() {

            window.scrollTo(0, 0);

        })
        
        $('.offerBox').on('click', function(){
    
            $(this).find('span').html() == '+' ? $(this).find('span').html('-') : $(this).find('span').html('+');
    
            $(this).next().stop().slideToggle();
    
        });

   });

   $('.offerBox').on('click', function(){

    $(this).find('span').html() == '+' ? $(this).find('span').html('-') : $(this).find('span').html('+');

    $(this).next().stop().slideToggle();

});


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

    $(".sideNavigationFirstBlock .sideNavLink").on('click', function() {

        $('.sideNavTrigger').removeClass('sideNavTriggerToggle');

        $('.sideNavigationFirstBlock').toggleClass('sideNavigationFirstBlockToggle');

        $('.sideNavigationSecondBlock').toggleClass('sideNavigationSecondBlockToggle');

    });

});


function scrollEvents() {

    let scroll = $(this).scrollTop();

        if(scroll >= 500) {

            $('#backToTop').addClass('backToTopShow');

        }

        else {

            $('#backToTop').removeClass('backToTopShow');

        }

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

function loaderShow() {

    let time = Math.round(new Date().getTime() / 1000 / 60);

    if (localStorage) {

        if (!localStorage.getItem('videoShowRejuvena')) {

            setTimeout(() => {

                $('.spinner-container').css({'opacity' : '0'});
        
                setTimeout(() => {
        
                    $('.spinner-container').css({'z-index' : '-1000'});
        
                }, 500);
        
                $('html').css('overflow-y', 'visible');

                localStorage.setItem('videoShowRejuvena', time);
        
            }, 2000);

        }

        else {

            let getTimeFromLocal = JSON.parse(localStorage.getItem('videoShowRejuvena'));

            console.log(time - getTimeFromLocal, time, getTimeFromLocal)

            if (time - getTimeFromLocal >= 20) {

                setTimeout(() => {

                    $('.spinner-container').css({'opacity' : '0'});
            
                    setTimeout(() => {
            
                        $('.spinner-container').css({'z-index' : '-1000'});
            
                    }, 500);
            
                    $('html').css('overflow-y', 'visible');

                    localStorage.removeItem('videoShowRejuvena');
            
                }, 2000);

            }

            else {

                $('.spinner-container').css({'display' : 'none'});

                setTimeout(() => {
            
                    $('.spinner-container').css({'z-index' : '-1000'});
        
                }, 500);

                $('html').css('overflow-y', 'visible');

            }

        }

    }

    else {

        alert('Local Storage is not supported on your browser !');

    }

}

function loyaltyCodeCheck() {

    if(localStorage) {

        if(localStorage.getItem('rejuvenaCode') && localStorage.getItem('rejuvenaCode') == 'approved') {

            $(".loyaltyOffers").show();

            $(".loyaltyClubInput").hide();

        }

        else {

            $(".loyaltyOffers").hide();

            $(".loyaltyClubInput").show();

        }

    }

    else {

        alert("Vaš pretraživač je previše star, molimo vas ažurirajte ga");

    }

}