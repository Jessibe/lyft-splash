/*Evento splash*/
$(document).ready(loadPage);

function loadPage() {
    splashView();
    bodyView();
}
function splashView() {
    setTimeout(function () {
        $(".splash").fadeOut(1500);
    }, 3000);
}

/*botones de views*/
$('.dropdown-button').dropdown('open');

/*views*/
function bodyView() {
    $("#main").hide();

    setTimeout(function () {
        $("#main").fadeIn(1500);
    }, 3000);
}
