$(function () {
    window.onload = function() {
        const spinner = document.getElementById('loading');
        spinner.classList.add('loaded');
    }

    $(".openbtn1").click(function () {
        $(this).toggleClass('active');
        $("#g-nav").toggleClass('panelactive');
    });
    $("#g-nav a").click(function() {
        $(".openbtn1").removeClass('active');
        $("#g-nav").removeClass('panelactive');
    });

});
