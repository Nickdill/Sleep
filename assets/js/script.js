$(document).ready(function() {

    $(window).on('scroll', function(){
        var stop = Math.round($(window).scrollTop());
        var ratio = stop / 600;
        var color = 'rgba(20,20,30,'+ratio+')';
        $('.main').css({
            'background' : color
        });
    });

});