const getDays = document.getElementById("days");
const getHours = document.getElementById("hours");
const getMins = document.getElementById("mins");
const getSecs = document.getElementById("secs");
const newYears = "25 Dec 2022";

function getDaysFunc() {
  const christMasDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (christMasDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  getDays.innerText = days;
  getHours.innerText = hours;
  getMins.innerText = minutes;

  if (seconds > 10) {
    getSecs.innerText = seconds;
  } else {
    getSecs.innerText = `0${seconds}`;
  }
}
getDaysFunc();
setInterval(getDaysFunc, 1000);
