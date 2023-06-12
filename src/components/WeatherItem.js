import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import './WeatherItem.css'

function WeatherItem(props) {
const [change, setChange] = useState(props.mood)

  const handleClick = () => {
    setChange("Not Sunny")
    console.log("EYYYYY")
  }
  return (

      <Card className='weatherCard'>
      <div className="weather-city">
        <h3>{props.city}</h3>
      </div>
      <div className="weather-state">
        <h3>{props.state}</h3>
      </div>
      <div className="weather-mood">
        <h3>{change}</h3>
      </div>
      <button onClick={handleClick}>Change This</button>
      </Card>
    
  )
}

export default WeatherItem;
