function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
  
    if (cityName === '') {
      alert('Please enter a city name');
      return;
    }
  
    const apiKey = 'caa441efedfbd4554db8fc7bb1a1beaa'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';
  
    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
    const description = data.weather[0].description;
  
    const weatherHtml = `
      <h2>${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;
  
    weatherInfo.innerHTML = weatherHtml;
  }
  