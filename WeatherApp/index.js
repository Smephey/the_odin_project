const API_KEY = '4cc3dcdd5c4251d4d5aaf16a59d39ac0';

const cityForDisplayContainer = document.querySelector('#current-city');
const temperatureForDisplayContainer = document.querySelector(
  '#current-temperature'
);
const searchInput = document.querySelector('#search-input');

initialise();

function initialise() {
  searchInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      getWeatherForCity(e.target.value.toString());
    }
  });

  const response = getWeatherForCity('Lisbon');
  response;
}

async function getWeatherForCity(city) {
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  await weatherResponse
    .json()
    .then((weatherData) => {
      cityForDisplayContainer.innerHTML = weatherData.name;
      temperatureForDisplayContainer.innerHTML = weatherData.main.temp;
    })
    .catch((error) => {
      console.log('error', error);
    });
}
