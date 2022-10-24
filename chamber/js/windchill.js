let temp = document.getElementById('temp');
let windSpeed = document.getElementById('wind_speed_value');
let windChill = document.getElementById('wind_chill_value');

windSpeed.innerHTML = 2.5;
temp.innerHTML = 33;
getWindChill();

function getWindChill() {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed,0.16)));
    if(temp.innerHTML <= 50 && windSpeed.innerHTML > 3.0) {
        windChill.innerHTML = chill;
    }
    else {
        windChill.innerHTML = "N/A";
    }

}