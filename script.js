function getWeather() {

  const city = document.getElementById("city").value;

  if(city === ""){
    alert("Please enter city name");
    return;
  }

  const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true&hourly=relativehumidity_2m,pressure_msl";

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      const weather = data.current_weather;

      const humidity = data.hourly.relativehumidity_2m[0];
      const pressure = data.hourly.pressure_msl[0];

      document.getElementById("result").innerHTML = `
        <h3>Current Weather in ${city}</h3>
        <p>Temperature: ${weather.temperature} °C</p>
        <p>Wind Speed: ${weather.windspeed} km/h</p>
        <p>Humidity: ${humidity}%</p>
        <p>Pressure: ${pressure} hPa</p>
        <p>Time: ${weather.time}</p>
      `;
    });
}