$('.dropdown').hover(
    function(){
        $(this).addClass('open');
    },function(){
        $(this).removeClass('open');

    }
);

$('#login-register').click(function(){
    $('#form-user').toggle();
});

$('#home-1').click(function(){
    $(this).css('background-color','rgb(14,14,14)')
});
$('#home-2').click(function(){
    $(this).css('background-color','rgb(14,14,14)')
});
$('#home-3').click(function(){
    $(this).css('background-color','rgb(14,14,14)')
});