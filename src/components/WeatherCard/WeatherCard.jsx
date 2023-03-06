import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './weatherCard.module.css'
import imageRain from '../../assets/vector-1.png'

function WeatherCard() {

  // const successCallback = (position) => {
  //   console.log(position);
  //   var lat = position.coords.latitude
  //   var lon = position.coords.longitude
  //   console.log(position.coords.latitude);
  //   console.log(position.coords.longitude);
  //   return lat, lon;

  // };
  
  // const errorCallback = (error) => {
  //   console.log(error);
  // };
  
  // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  const [weather, setWeather] = useState(null)
  const [date, setDate] = useState(null)
  const [wind, setWind] = useState(null)
  const [rain, setRain] = useState(null)
  const [location, setLocation] = useState(null)


  useEffect(() => {

     const fetchWeather = async() => {
        const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=41b8bdb0a2634000b3c174342230403&q=indore&aqi=yes`).then( async(data) => await data.json())
        const temperature = result.current.temp_c
        // console.log(result);
        // console.log(temperature);
        setWeather(result.current.temp_c)
        setDate( (result.current.last_updated) )
        setWind(result.current.wind_kph)
        setRain(result.current.condition.text)
        setLocation(result.location.name)


        console.log(result);
     }

     fetchWeather()
     
    }, [])

    console.log(weather);
    console.log(date);

    

  return (
    <div className={styles.weatherCard}>

      <div className={styles.dateTime}>
        <h2> {date} </h2>
      </div>
      

      <div className={styles.weatherData}>

        <div className={styles.rain}>
          <img width='63px' src={imageRain} alt='rain'></img> <br />
          {rain}
        </div>

        <div className={styles.line}>

        </div>

        <div className={styles.celcius}>
           {weather}°C
        </div>

        <div className={styles.line}>

        </div>

        <div className={styles.wind}>
          {wind} km/h
          Wind
        </div>

      </div>

    </div>
  )
}

export default WeatherCard

