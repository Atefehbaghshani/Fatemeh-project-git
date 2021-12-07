let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

let dateInfo = document.querySelector("#exactTime");
dateInfo.innerHTML = `${day}, ${hour}:${minute}`;
function showTemp(response) {
  console.log(response);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let desc = document.querySelector("#description");
  desc.innerHTML = response.data.weather[0].description;
  let currentDegree = document.querySelector("#current-degree");
  currentDegree.innerHTML = Math.round(response.data.main.temp);
}
function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  let apiKey = "0bacb13d6ace3f885383c55daa97b637";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
let submit = document.querySelector("#submit-form");
submit.addEventListener("submit", showCity);
