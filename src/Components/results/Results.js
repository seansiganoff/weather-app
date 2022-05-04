import React from 'react'
import './Results.css'

export default function Results({name, temp, condition}) {
  return (
      <div className="resultsDiv">
          <div>
            <p className='results'>It is currently {temp}&deg;F and {(condition ===  'Clouds' ? 'Cloudy' : condition)} in {name}</p>
        </div>
      </div>
  )
}
