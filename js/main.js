// Enable bootstrap tooltips and popovers anywhere 
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({

    interval: 2800
    });
});