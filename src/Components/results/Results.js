import React from 'react'
import './Results.css'
import Clock from '../clock/Clock'



export default function Results({name, temp, condition}) {
  
  return (
      <div className="resultsDiv">
          <Clock />
          <p>{temp}&deg;F and {(condition ===  'Clouds' ? 'Cloudy' : condition)} in {name}</p>
          
      </div>
  )
}
