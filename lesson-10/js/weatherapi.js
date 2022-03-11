const apiURL = "http://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=imperial&appid=d921f126e62ef280771adf266dfddd5a";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        document.querySelector('#current-temp').textContent = jsonObject.main.temp;

        /*const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;*/
  });
  