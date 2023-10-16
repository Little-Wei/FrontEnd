function LoadLoaderDotPulse() {
    $("body").append("<div class=\"dot-pulse position-absolute top-50 start-50 translate-middle\"><div class=\"dot-pulse__dot\"></div></div>");
}
function StopLoaderDotPulse() {
    $(".dot-pulse").remove();
}

LoadLoaderDotPulse();
StopLoaderDotPulse();