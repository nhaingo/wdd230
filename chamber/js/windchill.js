let temperature = document.querySelector('#temperature').innerHTML;
let speed = document.querySelector('#speed').innerHTML;
let windChill = document.querySelector("#windchill");

function getChill(temperature, speed) {

    let chill= 35.74 + 0.6215 * temperature - 35.75 * (speed ** 0.16) + 0.46275 * temperature * (speed ** 0.16);
    chill = Math.floor(chill);
    console.log(chill);

    return chill;
    
}

if (temperature <= 50 && speed >= 3) {
    let finalChill = getChill(temperature, speed);
    windChill.innerHTML = finalChill;
} else {
    let windChill = 'N/A';
}