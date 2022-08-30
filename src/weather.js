async function getWeather(city)
{
    try{
    const weather_response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e855dc0381e0dc05852e114630e3cfcf&units=metric`,{mode: 'cors'});
    const weather_data = await weather_response.json();
    const weather_main = await weather_data.main;
    console.log(weather_data);
     return{
         name: weather_data.name,
         desc: weather_data.weather[0].description,
         feels_like: weather_data.main.feels_like,
         temp: weather_data.main.temp,
         temp_max:weather_data.main.temp_max,
         temp_min:weather_data.main.temp_min,
         humidity:weather_data.main.humidity,
     }
    }
    catch(err)
    {
        console.log(err)
    }
}

export {getWeather};