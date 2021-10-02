let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let videoPlayer = document.getElementById("videoPlayer");

function changePlayButtonToPauseButton() {
    playButton.classList.remove("play-containter-visible-on");
    playButton.classList.add("play-containter-visible-off");

    pauseButton.classList.remove("pause-container-visible-off");
    pauseButton.classList.add("pause-container-visible-on");

    doPlayVideo();
    function doPlayVideo(){
        videoPlayer.play();
    }
}
