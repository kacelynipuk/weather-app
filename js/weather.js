// Feature 1: Show Current Date and Time

let now = new Date();

let currentTime = document.querySelector("#current-time");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

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

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentTime.innerHTML = `${hours}:${minutes} <br/>
 ${month} ${date}, ${year} (${day})`;

// comments: make it a functions, then dateElement.innerHTML = formatDate(currentTime);

// Feature 2:Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function updateCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");

  //let h3 = document.querySelector("h3"); // Previous homework, better use business name like cityInput etc.
  //h3.innerHTML = `${searchInput.value}`;

  let key = "5f472b7acba333cd8a035ea85a0d4d4c";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${key}&units=metric`;

  axios.get(url).then(displayWeather);
  //make an API call to Openweather API
  //Once I get the HTTP response, we display the city name and the temperature

  //function displayWeather(response);
}

let form = document.querySelector("form");
form.addEventListener("submit", updateCity);

// Feature 3 Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.
// skipped

function displayWeather(response) {
  //let weatherDiv = document.querySelector("#weather");
  //let temperature = Math.round(response.data.main.temp);

  // let windSpeed = response.data.wind.speed;
  // let humidity = response.data.main.humidity;
  // let city = response.data.name;

  document.querySelector("h3").innerHTML = response.data.name; // to make it simpler than below code.

  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = Math.round(response.data.main.temp);

  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = response.data.weather[0].description;

  let windSpeed = document.querySelector("#current-wind");
  windSpeed.innerHTML = response.data.wind.speed;

  let humidity = document.querySelector("#current-humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);

  //  <li id="description">Weather Discription</li>
  // <li id="current-temperature">10℃ </li>
  // <li id="current-humidity">Humidity: 91%</li>
  // <li id="current-wind">Wind: 4km/h</li>

  //let currentWeather = document.querySelector(".current-info");

  //console.log(response); check where the data are

  //weatherDiv.innerHTML = `It is ${temperature} degrees, ${description}, in ${city} wind ${windSpeed} humidity ${humidity}`;

  // let city = "Rome";
  // let key = "5f472b7acba333cd8a035ea85a0d4d4c";
  // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  // axios.get(url).then(displayWeather);
}
