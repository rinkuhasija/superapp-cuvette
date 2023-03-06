import React from 'react'
import NewsCard from '../../components/NewsCard/NewsCard'
import NotesCard from '../../components/NotesCard/NotesCard'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
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
        <WeatherCard />

      </div>
    </div>
  )
}

export default MainApp