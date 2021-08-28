const play = document.getElementById("play");
const range = document.getElementById("range");
const videoTime = document.getElementById("videoTime");
const videoDuration = document.getElementById("videoDuration");
const video = document.getElementById("video");

play.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    document.querySelector("#play").classList.replace("fa-play", "fa-pause");
    document.querySelector("#play").innerHTML = "Pause";
  } else {
    video.pause();
    document.querySelector("#play").classList.replace("fa-pause", "fa-play");
    document.querySelector("#play").innerHTML = "Play";
  }

  range.addEventListener("input", function () {
    video.currentTime = range.value;
    range.max = Math.floor(video.duration);
  });

  video.addEventListener("timeupdate", function () {
    videoTime.innerHTML = Math.floor(video.currentTime);
    range.value = video.currentTime;
    range.max = Math.floor(video.duration);
  });
});

window.onload = () => {
  videoTime.innerHTML = video.currentTime;
  videoDuration.innerHTML = Math.floor(video.duration);
};
