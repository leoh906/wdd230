const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=4b2d2f87ca75eabca88cafcdf35e042a&q=Fairbanks&units=imperial';

const getWeather = async () => {

    const response = await fetch(apiURL);

    const jsObject = await response.json();

    console.log(jsObject);

    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;

  };

getWeather();