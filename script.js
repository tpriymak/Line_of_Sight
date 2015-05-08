$(document).ready(function () {

    $('.right ul').prepend('<li><a href = "lineofsight.html">Home</a></li>');
    $('body').append('<div id="footer"></div>');
    var nav_link = $('.right ul li');
    var font_size = parseInt($(nav_link).css('font-size'));
    nav_link.hover(function ()
    {
        //$(this).css({ 'font-size': font_size + 5 + "px" });
        $(this).animate({ 'font-size': font_size + 10 + "px" }, 100);
       // $(this).addClass('highlight');
    },
    function () {
        $(this).animate({ 'font-size': font_size + "px" }, 100);
        //$(this).removeClass('highlight');
    });

    var img_width = parseInt($('.pics tr td').css('width'));
    var img_height = parseInt($('.pics tr td').css('height'));
    $('.pics tr td img').hover(function () {
        $(this).animate({ 'width': img_width + 200 + "px", 'height': img_height + 200 + "px" }, 100);
    },
    function () {
       $(this).animate({ 'width': img_width + "px", 'height': img_height + "px" }, 100);
    });
});
