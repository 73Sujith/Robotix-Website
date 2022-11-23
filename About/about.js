$(window).scroll(function(){$('nav').toggleClass('scrolled', $(this).scrollTop() > 550);});
$(window).scroll(function(){$('.navbar-nav').toggleClass('color', $(this).scrollTop() > 100);});
$(window).scroll(function(){$('.collapse').removeClass ('show', $(this).scrollTop() > 100);});
$(document).ready(function () {
$(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler") && !clickover.hasClass("carouse__arrow") && !clickover.hasClass("carous__arrow")) $("button.navbar-toggler").click();
    });
});


