class WeatherForecast {
  constructor(day, temperature, minTemp, maxTemp, condition, icon, humidity, windSpeed) {
    this.day = day;
    this.temperature = temperature;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
    this.condition = condition;
    this.icon = icon;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }

  generateHTML() {
    const container = document.getElementById("forecast-container");
    const box = document.createElement("div");
    box.classList.add("forecast-box");

    box.innerHTML = `
      <h2>${this.day}</h2>
      <img src="https://openweathermap.org/img/wn/${this.icon}@2x.png" alt="${this.condition}">
      <p>Condition: ${this.condition}</p>
      <p>Temp: ${this.temperature}°C</p>
      <p>Min: ${this.minTemp}°C / Max: ${this.maxTemp}°C</p>
      <p>Humidity: ${this.humidity}%</p>
      <p>Wind: ${this.windSpeed} m/s</p>
    `;
    container.appendChild(box);
  }
}

function getDayName(index) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return daysOfWeek[(today + index) % 7];
}

function fetchForecast(city, country) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&cnt=5&appid=6492b8fd81b885f8f93dc986c9634027`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      document.getElementById("forecast-container").innerHTML = "";

      const forecastData = data.list.map((item, index) => {
        const dayName = getDayName(index);
        const temperature = Math.round(item.main.temp);
        const minTemp = Math.round(item.main.temp_min);
        const maxTemp = Math.round(item.main.temp_max);
        const condition = item.weather[0].main;
        const icon = item.weather[0].icon;
        const humidity = item.main.humidity;
        const windSpeed = item.wind.speed;

        return new WeatherForecast(dayName, temperature, minTemp, maxTemp, condition, icon, humidity, windSpeed);
      });

      forecastData.forEach((forecast) => forecast.generateHTML());
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please try again.");
    });
}

document.getElementById("location-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const location = document.getElementById("location-select").value;
  const [city, country] = location.split(",");
  fetchForecast(city, country);
});

