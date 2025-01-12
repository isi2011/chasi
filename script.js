const hoursElem = document.querySelector(".hours");
const minutesElem = document.querySelector(".minutes");
const secondsElem = document.querySelector(".seconds");
const btns = document.querySelectorAll("button");

let timezoneOffset = 0;

function getTime() {
  const date = new Date();
  let hours = date.getUTCHours() + timezoneOffset;
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours >= 24) hours -= 24;
  if (hours < 0) hours += 24;

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return [hours, minutes, seconds];
}

function getTimezoneOffset(country) {
  switch (country) {
    case "baku":
      return 4;
    case "tokyo":
      return 9;
    case "new-york":
      return -5;
    case "london":
      return 0;
    case "sydney":
      return 11;
    default:
      return 0;
  }
}

function app() {
  setInterval(() => {
    const [h, m, s] = getTime();
    hoursElem.querySelector("span").textContent = h;
    minutesElem.querySelector("span").textContent = m;
    secondsElem.querySelector("span").textContent = s;
  }, 1000);

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const { country } = btn.dataset;
      timezoneOffset = getTimezoneOffset(country.toLowerCase());

      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

app();
