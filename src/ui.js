let city_name = document.querySelector('.city_name');
let desc = document.querySelector('.desc')
let feels_like = document.querySelector('.feels_like');
let temperature = document.querySelector('.temperature');
let max_temp = document.querySelector('.temp_max');
let min_temp = document.querySelector('.temp_min');;
let humidity = document.querySelector('.humidity');
function setWeather(weather_obj)
{
    city_name.textContent=weather_obj.name;
    desc.textContent=`${weather_obj.desc}`;
    feels_like.textContent=`feels like ${weather_obj.feels_like}`;
    temperature.textContent=`temperature :${weather_obj.temp}`;
    max_temp.textContent=`max temperature : ${weather_obj.max_temp}`;
    min_temp.textContent=`min temperature : ${weather_obj.min_temp}`;
    humidity.textContent=`humidity :${weather_obj.humidity}%`;
}

export {setWeather}