const sounds = ["first", "second", "third"];
var player = document.getElementById("music");
player.classList.toggle("paused");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    const song = document.getElementById(sound);
    if (song.paused) {
      stopSongs();
      song.play();
      document.getElementById("music").classList.remove("paused");
    } else {
      player = document.getElementById("music");
      player.classList.toggle("paused");
      song.pause();
      song.currentTime = 0;
    }
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
