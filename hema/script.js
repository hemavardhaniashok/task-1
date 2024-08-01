//AudioParam.openweather.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial


let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = () =>{
    const URL = 'http://api.openweathermap.org/data/2.5/weather'

    const Full_Url = '${URL}?q==${city}&{API_KEY}&units=imperial';
    const weatherpromise = fetch(Full_Url);
    console.log(city)

    return weatherpromise.then(() => {
        return response.json()
    })
}

 function searchCity(){
    const city = document.getElementById("city-input").ariaValueMax

    getWeatherData(city);
    then((response) =>{
        showWeatherData(response)
        console.log(Object)
    })
    .catch(err)
        console.log(err)
    }

 showWeatherData = (weatherData) =>{
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.name[0].main;
    document.getElementById('temp').innerText = weatherData.name.main.temp;
    document.getElementById('min-temp').innerText = weatherData.name.main.temp_min;
    document.getElementById('max-temp').innerText = weatherData.name.main.temp_max;
     
     


 }






