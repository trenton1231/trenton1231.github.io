$('.signature').on('click', function () {
    $('.hero').hide();
    $('.hero1').show();
});

$('.signature1').on('click', function () {
    $('.hero').hide();
    $('.hero1').show();
});


$('.signature').on('mouseenter', function () {
    $(this).css('background', 'pink');
});
$('.signature').on('mouseleave', function () {
    $(this).css('background', '#f7B733');
});



$('.signature1').on('mouseenter', function () {
    $(this).css('background', 'pink');
});
$('.signature1').on('mouseleave', function () {
    $(this).css('background', '#f7B733');
});