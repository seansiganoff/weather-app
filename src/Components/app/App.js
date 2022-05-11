import './App.css';
import Results from '../results/Results';
import React, { useState } from 'react';
import Clock from '../clock/Clock.js';


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
    <div className='appContainer'>
      <h1 className='heading'>Weather App</h1>
      
      <div className='container'>
        <div className='inputDiv'>
          <input
            className='input'
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            placeholder="Enter city"
            type='text'
          />
        </div>
        
  
        {typeof weatherData.main === 'undefined' ? (
          <div className='welcome'>
            <Clock />
          </div>
        ) : (
          <Results 
            name={weatherData.name}
            temp={Math.round(weatherData.main.temp)}
            condition={weatherData.weather[0].main}
          />
          
        ) }
      </div>
      
    </div>
  );
    
}

export default App;
