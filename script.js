let playBtn = document.getElementById("play-btn");
let video = document.querySelector("video");

//Setting Default video is not playing
let isVideoPlaying = false;

// play or pause video function
function playOrPauseVideo() {
    if(!isVideoPlaying){
        video.play();
        isVideoPlaying = true;
    }
    else{
        video.pause();
        isVideoPlaying = false;
    }
}



// AddEventListeners

playBtn.addEventListener("click", playOrPauseVideo);