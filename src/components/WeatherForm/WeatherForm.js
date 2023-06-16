import React, { useState } from "react";
import './WeatherForm.css'
const WeatherForm = () => {
  const [city, setCity] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.currentTarget)
  }

  return (
    <form>
      <div className="weather-form">
      <div className="weather-form-city">
        <label>City</label>
        <input type='text'/>
      </div>
      <div className="weather-form-city">
        <label>State</label>
        <input type='text'/>
      </div>
      </div>
      <div className='weather-form-button'>
        <button type='submit' onClick={handleClick}>Submit</button>
      </div>
    </form>
  )
}

export default WeatherForm;
