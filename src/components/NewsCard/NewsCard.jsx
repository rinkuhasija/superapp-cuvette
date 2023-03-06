import React from 'react'
import styles from './newsCard.module.css'
import { useState, useEffect } from 'react'

function NewsCard() {

  const [article, setArticle] = useState(null)
  const [title, setTitle] = useState(null)
  const [image, setImage] = useState(null)
  const [date, setDate] = useState(null)
  // const [wind, setWind] = useState(null)
  // const [rain, setRain] = useState(null)
  // const [location, setLocation] = useState(null)


  useEffect(() => {

    const fetchNews = async () => {
      const result = await fetch(`https://newsapi.org/v2/everything?q=weather&apiKey=2b55951b5a11498ca75009d8a6248af9`).then(async (data) => await data.json())

      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
      let random = getRandomInt(100)

      setArticle(result.articles[(random)].content)
      setTitle(result.articles[(random)].title)
      setImage(result.articles[(random)].urlToImage)
      setDate(result.articles[(random)].publishedAt)

      console.log(result)
    }

    fetchNews()

  }, [])

  // console.log(weather);
  // console.log(date);


  return (
    <div className={styles.newsCard}>
      <div className={styles.imgContainer}>

        <img src={image} alt='image'></img>

        <div className={styles.newsTitle}>

          <h3> {title} </h3>
          <p> {date} </p>

        </div>

      </div>

      <div className={styles.newsContent}>
        <br/>
        <p> {article} </p>
      </div>

    </div>
  )
}

export default NewsCard