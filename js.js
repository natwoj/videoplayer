let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let videoPlayer = document.getElementById("videoPlayer");

let progressResult = 0;
let progressLineTop = document.getElementById("progressLineTop");

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
    GoWithProgressLine()
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
GoWithProgressLine();
}
function GoWithProgressLine() {
var id = setInterval(frame,5);
function frame() {
if (videoPlayer.readyState) {
    progressResult = (videoPlayer.currentTime*560)/videoPlayer.duration;
    progressLineTop.style.width = progressResult;
}
}
}
function CurrentTimeMeasure () {
let properCurrentTimeRes = "";
let minutes = Math.floor(videoPlayer.currentTime / 60);
let seconds = (videoPlayer.currentTime - minutes * 60);
seconds = seconds.toFixed(0);



}