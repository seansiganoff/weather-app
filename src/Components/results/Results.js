import React from 'react'
import './Results.css'



export default function Results({name, temp, condition}) {
  return (
      <div className="resultsDiv">
          <p>{name}</p>
          <p>{temp}&deg;F</p>
          <p>{(condition ===  'Clouds' ? 'Cloudy' : condition)}</p>
      </div>
  )
}
