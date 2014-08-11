(function () {
    
    $(window).scroll(function () {

        if ($(".header").offset().top > 50) {
            $(".header-fixed-top").addClass("header-collapse");
        } else {
            $(".header-fixed-top").removeClass("header-collapse");
        }

        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("navbar-fixed-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("navbar-fixed-collapse");
        }	
    });

})();