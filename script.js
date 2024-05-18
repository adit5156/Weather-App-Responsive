const apiKey = "7c3bead7a0a97467f4fbd1ed69bb30d8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherContainer = document.querySelector('.weather-container');
const errorMessage = document.querySelector('.error');
const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchInput.value);
});

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        weatherContainer.style.display = "none";
        errorMessage.style.display = "block";
    }

    else {

        console.log(data);

        weatherContainer.style.display = 'block';
        errorMessage.style.display = 'none';

        if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Haze") {
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }


        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    }
}