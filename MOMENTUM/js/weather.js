const API_KEY = "e00734a0ced879447911e7db2d254b59";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoErr() {
    alert("사용자의 위치를 알 수 없습니다. 날씨정보를 제공할 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);