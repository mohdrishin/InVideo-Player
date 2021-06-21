let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");
// let progressBar = document.querySelector(".progress-bar");


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

// // play or pause video function
// function playOrPauseKeyBoard(event) {
//        console.log(event);
//         if (event.keyDown) {
//             console.log(event);
//         video.play();
//         isVideoPlaying = true;
//         playBtn.classList.replace("fa-play", "fa-pause")
//      } else {
//         video.pause();
//         isVideoPlaying = false;
//         playBtn.classList.replace("fa-pause", "fa-play")
//       }
// }

function updateProgressBar(event) {
    console.log(event.target.currentTime, event.target.duration);
    // one method
    //progressBar.style.cssText = ` width: ${event.target.currentTime/event.target.duration*100}% `;
    // exact method is given below
    let width = Math.floor(100 * event.target.currentTime / event.target.duration);
    document.querySelector(".progress-bar").style.width = width+'%';
}

// AddEventListeners
playBtn.addEventListener("click", playOrPauseVideo);
video.addEventListener("click", playOrPauseVideo);
video.addEventListener("timeupdate", updateProgressBar); 

// video.addEventListener("keyDown", playOrPauseKeyBoard);