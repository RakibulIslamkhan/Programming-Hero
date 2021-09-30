const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const cityFiled = document.getElementById('city-name');
const imgIcon = document.getElementById('weather-icon');
const searchTemperature = () => {
    const city = cityFiled.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
    cityFiled.value = '';
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    imgIcon.setAttribute('src', url);
}