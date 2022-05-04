
import './App.css';
import Heading from '../heading/Heading.js';
import Results from '../results/Results';
import React, { useState } from 'react';

function App() {
  const apiKey = "0cf6ac12d26fc1118dcfe4be214791ed";
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if(event.key === 'Enter') {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity('')
        }
      )
    }
  }
  
  return (
    <div className='appMainDiv'>
      <Heading />
      <div className='inputDiv'>
        <input
          className='input'
          onChange={e => setCity(e.target.value)}
          value={city}
          onKeyPress={getWeather}
          placeholder="Enter city or state"
        />
      </div>
      

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>Welcome</p>
        </div>
      ) : (
        <Results 
          name={weatherData.name}
          temp={Math.round(weatherData.main.temp)}
          condition={weatherData.weather[0].main}
        />
      ) }
    </div>
  );
    
}

export default App;
