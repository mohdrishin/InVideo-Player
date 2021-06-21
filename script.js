let playBtn = document.getElementById("play-btn");
let video = document.querySelector("video");

//Setting Default video is not playing
let isVideoPlaying = false;

// play or pause video function
function playOrPauseVideo() {
    if(!isVideoPlaying){
        video.play();
        isVideoPlaying = true;
        playBtn.classList.replace("fa-play", "fa-pause")
        
    } else {
        video.pause();
        isVideoPlaying = false;
        playBtn.classList.replace("fa-pause", "fa-play")
    }
}



// AddEventListeners
playBtn.addEventListener("click", playOrPauseVideo);
video.addEventListener("click", playOrPauseVideo);