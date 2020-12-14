const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=8b53852779ab7526edc0a9a6eacc15cd&units=imperial';

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('weather-desc').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    });

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&APPID=8b53852779ab7526edc0a9a6eacc15cd&units=imperial';
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));

        const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

        let day = 0;

        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp;
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`icon${day+1}`).src = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            document.getElementById(`icon${day+1}`).alt = 'A picture of ' + forecast.weather[0].main;

            day++;
        });

    });