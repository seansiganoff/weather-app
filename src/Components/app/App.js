import './App.css';
import Results from '../results/Results';
import React, { useState } from 'react';
import Clock from '../clock/Clock.js';


function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    event.preventDefault();


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
      response => {
        if(response.status === 200) {
          return response.json();
        } else {
          alert("States Are Not Allowed As Input! Or, Please Make Sure You Are Spelling The City Correct!")
          window.location.reload();
        }
      }
    ).then(
      data => {
        setWeatherData(data)
        setCity('')
      }
    )

    
  }

    const main = require("../../images/main-background.jpg")
    const cloudy = require("../../images/cloudyday.jpg")
    const rain = require("../../images/rainyday.jpeg");
    const snow = require("../../images/snowday.jpg");
    const clear = require("../../images/clearsky.jpg")
    const mist = require("../../images/mistyday.webp");
    const condition = weatherData.main !== undefined ? weatherData.weather[0].description : "main";
    let getBackground = condition.includes("rain") ? rain : condition.includes("show") ? snow : condition.includes("mist") ? mist : condition.includes("haze") ? mist : condition.includes("cloud") ? cloudy : condition.includes("clear") ? clear : condition.includes("drizzle")  ? rain : main;
   

  return (
    <section>
      <div className='appContainer'>
        <img src={getBackground} alt='background' style={{width: "100%", minHeight: "100vh", maxHeight: '100vh'}}/>
       
        <div className='overlay-container'>
          <h1 className='heading'>Weather App</h1>
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
                wind={weatherData.wind.speed}
              />
              
            ) }
          </div>
        </div>
      </div>
    </section>
  );
    
}

export default App;
