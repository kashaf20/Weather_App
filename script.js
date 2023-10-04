const data = {
    title: "Weather App",
    text: "Weather App",
    url: "file:///C:/Users/kashaf/OneDrive/Desktop/project/weather/Weather%20App/index.html"
};
if (navigator.canShare && navigator.canShare(data)) {
    navigator.share(data);
} else {
    //not supported!
}
// Import modules using ES6 syntax
import { api, greet } from './App.js';

greet(); // Call the function from the imported module
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const Weather_img = document.querySelector('.Weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');
const location_not_found = document.querySelector('.location-not-found');
const wd = document.querySelector('.wether-body');
const temp_min = document.getElementById('temp_min');
const temp_max = document.getElementById('temp_max');

async function checkWeather(city) {
    const api_key = api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        wd.style.display = "none";
        return;
    }
    console.log("run");
    location_not_found.style.display = "none";
    wd.style.display = "flex";
    // console.log(weather_data);

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    temp_min.innerHTML = `${Math.round(weather_data.main.temp_min - 274.15)}°C`;
    temp_max.innerHTML = `${Math.round(weather_data.main.temp_max - 272.15)}°C`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            console.log("Weather description: clouds");
            Weather_img.src = "./img/Clouds.jpeg";
            break;
        case 'Clear':
            console.log("Weather description: cler");
            Weather_img.src = "./img/cler.jpeg";
            break;
        case 'Rain':
            console.log("Weather description: Rain");
            Weather_img.src = "./img/Rain.jpeg";
            break;
        case 'Mist':
            console.log("Weather description: Mist");
            Weather_img.src = "./img/Mist.jpeg";
            break;
        case 'Snow':
            console.log("Weather description: Snow");
            Weather_img.src = "./img/Snow.jpeg";
            break;
        case 'Haze':
            console.log("Weather description: haze");
            Weather_img.src = "./img/haze.jpeg";
            break;
        case 'Thunderstorm':
            console.log("Weather description: thunderstorm");
            Weather_img.src = "./img/Rain.jpeg";
            break;
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});