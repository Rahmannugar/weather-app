const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const header = document.getElementById("header");
const subHeader = document.getElementById("sub-header");
const weatherImage = document.getElementById("weather-image");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1a2884bbb4msh90d2e4e73802769p17cd44jsn747ede59410c",
    "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
  },
};

const weather = async (value) => {
  const response = await fetch(
    `https://yahoo-weather5.p.rapidapi.com/weather?location=${value}&format=json&u=f`,
    options
  );
  const data = await response.json();
  // console.log(data.current_observation.condition);
  console.log(data);
  const temp = (data.current_observation.condition.temperature - 32) * 0.55;
  header.innerText = `${data.location.city} - ${data.current_observation.condition.text}`;
  subHeader.innerText = `Temperature: ${temp.toFixed(2)}C`;
  if (temp >= 20 < 30) {
    weatherImage.src = "./neda-astani-KWTkd7mHqKE-unsplash.jpg";
  } else if (temp >= 10 < 20) {
    weatherImage.src = "./valentin-muller-bWtd1ZyEy6w-unsplash.jpg";
  } else if (temp < 10) {
    weatherImage.src = "./craig-whitehead-SuJp8ZpkubI-unsplash.jpg";
  } else if (temp > 30) {
    weatherImage.src = "./dedu-adrian-BxT5oqgztNc-unsplash.jpg";
  }
};

searchBtn.addEventListener("click", () => {
  weather(searchInput.value);
  //console.log(searchInput.value);
});
