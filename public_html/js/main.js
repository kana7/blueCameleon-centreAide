// Changer le sens des fleches du group-panel
$(".collapsed").each(function () {
    var stock_collapse = $(this).attr("href");
    var stock_i = $(this).find("i");
    
    $(stock_collapse).on("show.bs.collapse", function () {
        stock_i.addClass("fa-angle-up").removeClass("fa-angle-down");
    });
    $(stock_collapse).on("hide.bs.collapse", function () {
        stock_i.addClass("fa-angle-down").removeClass("fa-angle-up");
    });
});

// Fermer le menu quand on clique a coté
$('html').mouseup(function (e) {
    var check = $('#SlideAccordion, .PhoneMenu');
    var check_i = $(".PhoneMenu").find("i");
    
    if (!check.is(e.target) && check.has(e.target).length === 0) {
        $(".PhoneMenuContainer").animate({'left' : '-92%'});
        $(".PhoneMenuContainer").attr('id', 'closed');
        check_i.addClass("fa-bars").removeClass("fa-times");
    }
});

// Ouvrir/Fermer le menu mobile
$(".PhoneMenu").on("click", function (){
    var slide = $(".PhoneMenuContainer").attr('id');
    var check_i = $(".PhoneMenu").find("i");
    
    if (slide === 'open') {
        $(".PhoneMenuContainer").animate({'left':'-92%'});
        $(".PhoneMenuContainer").attr("id", "closed");
        check_i.addClass("fa-bars").removeClass("fa-times");
    }
    else {
        $(".PhoneMenuContainer").animate({'left':'0'});
        $(".PhoneMenuContainer").attr('id', 'open');
        check_i.addClass("fa-times").removeClass("fa-bars");
    }
});

// Button pour remonter en haut de la page
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').css("display", "block");
        } else {
            $('.scrollToTop').hide();
        }
    });
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

// Style show/hide pour les menuDropdown
$(".dropdown").each(function () {
    var find_hover = $(this).find(".dp-hover");
    
    $(this).on("show.bs.dropdown", function () {
        $(find_hover).addClass("is-visible").removeClass("is-hidden");
    });
    $(this).on("hide.bs.dropdown", function () {
        $(find_hover).addClass("is-hidden").removeClass("is-visible");
    });
});