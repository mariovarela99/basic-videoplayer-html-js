const play = document.getElementById("play");
const range = document.getElementById("range");
const videoTime = document.getElementById("videoTime");
const videoDuration = document.getElementById("videoDuration");
const video = document.getElementById("video");

play.addEventListener("click", function () {
  PlayPause();
});

range.addEventListener("input", function () {
  video.currentTime = range.value;
  range.max = Math.floor(video.duration);
});

video.addEventListener("timeupdate", function () {
  videoTime.innerHTML = Math.floor(video.currentTime);
  range.value = video.currentTime;
  range.max = Math.floor(video.duration);
});

window.onload = () => {
  videoTime.innerHTML = video.currentTime;
  videoDuration.innerHTML = Math.floor(video.duration);
};

window.addEventListener("keydown", function PlayPause(event) {
  if (event.key === " ") {
    PlayPause();
  } else {
    if (event.key === "ArrowRight") {
      video.currentTime = video.currentTime + 10;
    } else if (event.key === "ArrowLeft") {
      if (video.currentTime >= 10) {
        video.currentTime = video.currentTime - 10;
      } else {
        video.currentTime = 0;
      }
    }
  }
});

function PlayPause() {
  if (video.paused) {
    video.play();
    document.querySelector("#play").classList.replace("fa-play", "fa-pause");
    document.querySelector("#play").innerHTML = "Pause";
  } else {
    video.pause();
    document.querySelector("#play").classList.replace("fa-pause", "fa-play");
    document.querySelector("#play").innerHTML = "Play";
  }
}
