import './App.css';
import Results from '../results/Results';
import React, { useState } from 'react';
import Clock from '../clock/Clock.js';


function App() {
  const apiKey = "789874062e2e83109ec94ec4599df76a";
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
      response => response.json()
    ).then(
      data => {
        setWeatherData(data)
        setCity('')
      }
    )
  }

  
  
  
  return (
    <div className='appContainer'>
      <div className='overlay-container'>
        <h1 className='heading'>Weather App</h1>
          <div className='input-container'>
            <form onSubmit={getWeather}>
              <input
                className='input'
                onChange={e => setCity(e.target.value)}
                value={city}
                placeholder="Enter city"
                type='text'
              />
              <button className='submit' type='submit'>Search</button>
            </form>
          </div>
          <div className='clock'>
            <Clock />
          </div>

          <div className='result-container'>

            {typeof weatherData.main === 'undefined' ? (
              <></>
            ) : (
              <Results 
                name={weatherData.name}
                temp={Math.round(weatherData.main.temp)}
                condition={weatherData.weather[0].main}
              />
              
            ) }
          </div>
      </div>
    </div>
  );
    
}

export default App;
