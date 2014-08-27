(function () {

    $(window).scroll(function () {
        var opacity = (parseInt($(".navbar").offset().top)/100)
        var opacityshadow = (parseInt($(".navbar").offset().top)/100)
        if(opacityshadow > 0.20){
            opacityshadow= 0.20;
        }
        ///TODO: ALTERAR O RGB NO BACKGROUND-COLOR PARA A ESCOLHA NO MOMENTO DA CUSTOMIZAÇÃO.
        $(".navbar").css({
            'background-color': 'rgba(63,81,181,'+opacity+')',
            'box-shadow': '0 2px 4px rgba(0, 0, 0, '+opacityshadow+')'
        })

        $(".title-page").css('opacity', opacity);

    });
    $(window).scroll();
})();