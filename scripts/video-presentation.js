$(document).ready(function() {
    console.log( "ready!" );    
    var video = document.querySelector(".vp-video"),
        button = document.querySelector(".vp-btn-play");
    
    button.addEventListener("click", function () {
        video.play();
        video.setAttribute("controls","controls");
    }, false);

    $(".vp-btn-play").click(function() {
        $(".vp-desc").addClass('video-play-desc-hide');
    })
});