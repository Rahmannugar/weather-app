//declaring dom variables
const temp = document.getElementById("temp");
const weatherOutput = document.getElementById("weather-output");
const cityName = document.getElementById("city-name");
const weatherType = document.getElementById("weather-type");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");

//this enables the search button function
const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  //console.log(city);
  const data = await getWeatherData(city);
  showWeatherData(data);
};

//function to get weather data
const getWeatherData = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d72c98894cmsh28b3af34c5863e1p19f360jsne4b9c3aa39ec",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  return fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`,
    options
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

const showWeatherData = (WeatherData) => {
  console.log({ WeatherData });
  cityName.innerText = WeatherData.name;
  weatherType.innerText = WeatherData.weather[0].main;
  temp.innerText = WeatherData.main.temp;
  minTemp.innerText = WeatherData.main.temp_min;
  maxTemp.innerText = WeatherData.main.temp_max;
};
