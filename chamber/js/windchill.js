/*let temperature =parseFloat(document.querySelector('#temperature').innerHTML);
let windSpeed = parseFloat(document.querySelector('#speed').innerHTML);*/
/*weather */
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Antananarivo&units=metric&appid=d921f126e62ef280771adf266dfddd5a";
fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject); 
        const weatherTemp = jsonObject.main.temp;
        let currentTemp = document.querySelector('#current-temp');
        let windSpeed = jsonObject.wind.speed;
        let currentSpeed = document.querySelector('#speed');
        let chill = document.querySelector('#windchill');

        currentTemp.textContent = weatherTemp.toFixed(1);
        currentSpeed.textContent = windSpeed;

        const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        
        
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;

    

    function windChill(temp, speed) {
        if( temp <= 50 && speed >3) {
        let windchill = (35.74 + 0.6215 * temp - 35.75 * (speed ** 0.16) + 0.4275 * temp * ( speed ** 0.16)).toFixed(1);
        return windchill;
        } 
        else {
        return  "N/A";
        }
    }
    chill.innerHTML = windChill(weatherTemp, windSpeed);
});
    