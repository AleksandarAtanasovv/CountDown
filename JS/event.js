const getDays = document.getElementById("days");
const getHours = document.getElementById("hours");
const getMins = document.getElementById("mins");
const getSecs = document.getElementById("secs");

//Hamburger Menu Logic

const hamBurger = document.querySelector(".hamburger-menu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navBar.classList.toggle("disabled");
});

navLinks.forEach((navs) => {
  navs.addEventListener("click", () => {
    navBar.classList.toggle("disabled");
  });
});
function getDaysFunc() {
  const newEvent = document.getElementById('date').value;
  const eventDate = new Date(newEvent);
  const currentDate = new Date();
  const birthdayText = document.getElementById('birthday');

  const totalSeconds = (eventDate - currentDate) / 1000;
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
  
  if(days < 0 || hours < 0 || minutes < 0 || seconds < 0){
    getDays.innerText = "0";
    getHours.innerText = "0";
    getMins.innerText = "0";
    getSecs.innerHTML = "0";
  }
  if(isNaN(days)){
    getDays.innerText = "0";
    getHours.innerText = "0";
    getMins.innerText = "0";
    getSecs.innerHTML = "0";
  }if(days === -1){
    
    birthdayText.innerText = "THE EVENT IS NOW!!!"
  }else if(days < -1){
    birthdayText.innerText ="The event went by"
    Math.abs(getDays).innerText = "0";
    Math.abs(getHours).innerText = "0";
    Math.abs(getMins).innerText = "0";
    Math.abs(getSecs).innerHTML = "0";
  }else{
    birthdayText.innerText ="Event in"
  }
}
getDaysFunc();
setInterval(getDaysFunc, 1000);
