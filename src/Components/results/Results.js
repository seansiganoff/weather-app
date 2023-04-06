import React from 'react'
import './Results.css'



export default function Results({name, temp, condition, wind}) {
  return (
      <div className="resultsDiv">
          <p className='name'>{name}</p>
          <p>{temp}&deg;F</p>
          <p>{(condition ===  'Clouds' ? 'Cloudy' : condition)}</p>
          <p>Wind {Math.floor(wind)} MPH</p>
      </div>
  )
}
