$(function(){
     $('.desc').hide();
     $('.arrow-left').hide();
     $('.arrow-right').hide();

    $('#column-1').hover(function(){
    	$('#main').toggle();
        $('#after-main').toggle();
        $('#bc-main').toggle();
        $('#bc-after-main').toggle();
        $('#arrow-1').toggle();
    });

    $('#column-2').hover(function(){
    	$('#main').toggle();
        $('#after-main').toggle();
        $('#hr-main').toggle();
        $('#hr-after-main').toggle();
        $('#arrow-2').toggle();
    });

    $('#column-3').hover(function(){
    	$('#main').toggle();
        $('#after-main').toggle();
        $('#cf-main').toggle();
        $('#cf-after-main').toggle();
        $('#arrow-3').toggle();
    });
});