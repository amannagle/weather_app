//api key = e855dc0381e0dc05852e114630e3cfcf
import { getWeather } from "./weather";
const search_input = document.getElementById('weather_search');
const form = document.getElementById('weather_form');
const search_button = document.getElementById('search_btn');
form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

search_button.addEventListener('click',async()=>{
    let city_name = search_input.value;
    const weather_obj = await getWeather(city_name);
    console.log(weather_obj)
})
