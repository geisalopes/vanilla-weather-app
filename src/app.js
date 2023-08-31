// Set current day and time

let dateElement = document.querySelector("#date");
let currentDate = new Date();
dateElement.innerHTML = showCurrentDate(currentDate);

function showCurrentDate(date) {
  let hours = date.getHours();
  hours = `0${hours}`;
  if (hours < 10) {
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

// Set current temperature, city, wind and humidity and description

function displayTemperature(response) {
  console.log(response.data); 
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
}

function search(city) {
  let apiKey = "9d85a623d5f54fa249d3910c26ca0525";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

// Add search to form

let enterNameCity = document.querySelector("#search-form");
enterNameCity.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-input");
  search(cityInputElement.value);
}

// Convert temperature to celsius and fahrenheit

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  fahrenheitLink.classList.remove("noactive");
  fahrenheitLink.classList.add("active");
  celsiusLink.classList.add("noactive");

  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("noactive");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.add("noactive");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

search("Berlin");
