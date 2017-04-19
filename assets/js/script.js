$(document).ready(function() {

    $(window).on('scroll', function(){
        var stop = Math.round($(window).scrollTop());
        var ratio = stop / 600;
        var color = 'rgba(0,0,0,'+ratio+')';
        $('.main').css({
            'background' : color
        });
    });

});