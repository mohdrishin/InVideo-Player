let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");
let progressBar = document.querySelector(".progress-bar");
let progressRange = document.querySelector(".progress-range");

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
    
    // first method
    let currentTime = event.target.currentTime;
    let duration = event.target.duration;
    progressBar.style.cssText = ` width: ${currentTime/duration*100}% `;
    // console.log(progressBar);
    // second method is given below
    // let width = Math.floor(100 * event.target.currentTime / event.target.duration);
    // document.querySelector(".progress-bar").style.width = width+'%';
}

function updateSeekbar(event) {
    // console.log(event.offsetX, event.target.clientWidth);
    let currentPoint = event.offsetX;
    let progressbarWidth = event.target.clientWidth;
    let currentRange = (currentPoint/progressbarWidth) * video.duration
    // console.log(currentRange)
    // below currentTime is a inbuilt property of video
    video.currentTime = currentRange;
}

// AddEventListeners
playBtn.addEventListener("click", playOrPauseVideo);
video.addEventListener("click", playOrPauseVideo);
video.addEventListener("timeupdate", updateProgressBar); 
progressRange.addEventListener("click", updateSeekbar);

// video.addEventListener("keyDown", playOrPauseKeyBoard);