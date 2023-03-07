import React from 'react'
import { Link } from 'react-router-dom'
import NewsCard from '../../components/NewsCard/NewsCard'
import NotesCard from '../../components/NotesCard/NotesCard'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import TimerCard from '../../components/TimerCard/TimerCard'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import styles from './mainApp.module.css'

function MainApp() {
  return (

    <div className={styles.mainApp}>

      <div className={styles.container}>


        <ProfileCard />

        <NotesCard />

        <NewsCard />



      </div>

      <div className={styles.separate}>
        <TimerCard />
        <WeatherCard />

      </div>

      <Link to='/content'> <button className={styles.btn}> <span> Browse </span>  </button> </Link>


    </div>
  )
}

export default MainApp