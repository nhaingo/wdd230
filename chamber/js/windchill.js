let temperature =parseFloat(document.querySelector('#temperature').innerHTML);
let windSpeed = parseFloat(document.querySelector('#speed').innerHTML);
let chill = document.querySelector('#windchill');

function windChill(temp, speed) {
    if( temp <= 50 && speed >3) {
        let windchill = (35.74 + 0.6215 * temp - 35.75 * (speed ** 0.16) + 0.4275 * temp * ( speed ** 0.16)).toFixed(1);
        return windchill;
    } 
    else {
        return  "N/A";
    }
}
chill.innerHTML = windChill(temperature, windSpeed);