const play = document.getElementById("play");
const range = document.getElementById("range");
const videoTime = document.getElementById("videoTime");
const videoDuration = document.getElementById("videoDuration");
const video = document.getElementById("video");

function Timing(time) {
  const h = time / 3600;
  const rh = time % 3600;
  const m = rh / 60;
  const s = rh % 60;

  return {
    hours: h,
    minutes: m,
    seconds: s,
  };
}

play.addEventListener("click", function () {
  PlayPause();
});

range.addEventListener("input", function () {
  video.currentTime = range.value;
  range.max = Math.floor(video.duration);
});

video.addEventListener("timeupdate", function () {
  range.value = video.currentTime;
  range.max = Math.floor(video.duration);

  const Timer = Timing(video.currentTime);

  videoTime.innerHTML = `${Math.floor(Timer.hours)}: ${Math.floor(
    Timer.minutes
  )}: ${Math.floor(Timer.seconds)}`;
});

window.onload = () => {
  const Time = Timing(Math.floor(video.duration));
  const Timer = Timing(video.currentTime);
  videoTime.innerHTML = `${Timer.hours}: ${Timer.minutes}: ${Timer.seconds}`;
  videoDuration.innerHTML = `${Math.floor(Time.hours)}: ${Math.floor(
    Time.minutes
  )}: ${Math.floor(Time.seconds)}`;
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
