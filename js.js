let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let videoPlayer = document.getElementById("videoPlayer");
// zmiana ikony play na pause po kliknięciu
function ChangePlayButtonToPauseButton() {
    playButton.classList.remove("play-container-visible-on");
    playButton.classList.add("play-container-visible-off");

    pauseButton.classList.remove("pause-container-visible-off");
    pauseButton.classList.add("pause-container-visible-on");

    doPlayVideo();
    function doPlayVideo(){
        videoPlayer.play();
    }
}
function ChangePauseButtonToPlayButton () {
pauseButton.classList.remove("pause-container-visible-on");
pauseButton.classList.add("pause-container-visible-off");

playButton.classList.remove("play-container-visible-off");
playButton.classList.add("play-container-visible-on");

doPauseVideo();
function doPauseVideo() {
videoPlayer.pause(); 

}

}
