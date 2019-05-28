//Hide Action
$(document).ready(function () {
    $("p").click(function () {
        if ($(this).hasClass("blue")) {
            ($(this).removeClass("blue"));
        } else {
            $(this).addClass("blue");
        }

    });
});