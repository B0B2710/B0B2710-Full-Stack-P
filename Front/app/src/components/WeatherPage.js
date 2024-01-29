import React, { useEffect, useState } from 'react';
import { Card,Button  } from 'semantic-ui-react';
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import '../styles/Weather.css';
import moment from 'moment';
import axios from 'axios';

const refresh = () => {
  window.location.reload();
}

function WeatherPage(){
  const [data, setData] = useState([]);
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [position,setPosition] = useState(null);



  const handleLocation = async () => {

    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    setPosition({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });

  }
  const fetchWeathergeo = async () =>{
    handleLocation();
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}?lat=${position.lat}&lon=${position.long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch weather data pls try again');
    }
   
  };
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch weather data');
    }
  };
        
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };


  return(
    <div className='weather-main' > 
    <div className='weather-ui'>
      <h1> Welcome to my Basic API example </h1>
      <h2>Enter a city or click the left button the get the weather by your location</h2>
      
      
      <form className='inputs' onSubmit={handleSubmit}>
      <button className='btn' onClick={fetchWeathergeo}><FaLocationDot/></button>
      <input
            className='text-input'
            name='city'
            type='text' 
            value={city}
            onChange={handleCityChange}
            placeholder='Enter city name'
          />
      <button className='btn' type="submit"><FaSearch/></button>     
      </form>
      {error && <p>{error}</p>}
    </div>
    {weatherData && (
        <div>
          &nbsp;
          <WeatherShow weatherData={weatherData}/>
          
        </div>
      )}
    </div>

  );
 

}
const WeatherShow = ({ weatherData }) => {

    
  if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
    return null; 
  }
return(    
  <div className="main">

      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
    
 
)};

export default WeatherPage;
