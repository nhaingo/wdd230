const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=d921f126e62ef280771adf266dfddd5a";
fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject); 
        const weatherTemp = jsonObject.main.temp;
        const currentTemp = document.querySelector('#current-temp');

        currentTemp.textContent = weatherTemp.toFixed(1);
        const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        
        
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;

    });
    

    


  