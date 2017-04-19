$(document).ready(function() {

    $(window).on('scroll', function(){
        var stop = Math.round($(window).scrollTop());
        var ratio = stop / ($(document).height() - 400);
        var color = 'rgba(0,0,0,'+ratio+')';
        $('.main').css({
            'background' : color
        });
        var r = 241 + ratio*2;
        var g = 196 - ratio*40;
        var b = 15 + ratio*3;
        var st = 'rgba('+r+','+g+','+b+',1.0)';
        $(".text").css({
            'color': st
        });
    });

});