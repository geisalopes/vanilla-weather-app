// Definir temperatura atual, bem como cidade, vento e umidade

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
  // console.log(response.data);
}

let apiKey = "bf12f0ob06f7acf048dt44a41aadd939";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Sapucaia do Sul&key=${apiKey}&units=metric`;

// console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

// Definir dia e hora atual

function showCurrentDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentDate = new Date();
dateElement.innerHTML = showCurrentDate(currentDate);

// Adicionar pesquisa ao form

function search(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-input");
  let city = cityInputElement.value;
  searchCity(city);
}

function searchCity(city) {
  let apiKey = "bf12f0ob06f7acf048dt44a41aadd939";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let enterNameCity = document.querySelector("#search-form");
enterNameCity.addEventListener("submit", search);
