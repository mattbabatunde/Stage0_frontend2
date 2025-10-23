const textLines = [
  "Initializing Mr Matt System ...",
  "Loading AI-Vision Modules ...",
  "Activating MI-Core Engine ...",
  "System Online — Mr Matt : The Iron Tech Visionary ⚡",
];

// Live time in milliseconds
const timeDisplay = document.getElementById("live-time");
function updateTime() {
  timeDisplay.textContent = Date.now();
}
setInterval(updateTime, 1000);
updateTime();

// Boot screen fade-out
const boot = document.getElementById("bootScreen");
const card = document.getElementById("profileCard");
setTimeout(() => {
  boot.style.opacity = "0";
  setTimeout(() => {
    boot.style.display = "none";
    card.style.opacity = "1";
  }, 800);
}, 4500);
