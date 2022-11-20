const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=34.2309&lon=-111.3251&appid=4b2d2f87ca75eabca88cafcdf35e042a&units=imperial';

const getWeather = async () => {

    const response = await fetch(apiURL);

    const jsObject = await response.json();

    console.log(jsObject);

  let temperature = jsObject.main.temp;
  let windSpeed = jsObject.wind.speed;

    document.querySelector('#temp').textContent = Math.round(jsObject.main.temp,0);
    document.querySelector('#wind_speed_value').textContent = jsObject.wind.speed;
    document.querySelector('#wind_chill_value').textContent = Math.round(35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16,2);



//     const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
// const desc = jsObject.weather[0].description;
// document.querySelector('#icon-src').textContent = iconsrc;
// document.querySelector('#weathericon').setAttribute('src', iconsrc);
// document.querySelector('#weathericon').setAttribute('alt', desc);
// document.querySelector('figcaption').textContent = desc;

  };

getWeather();