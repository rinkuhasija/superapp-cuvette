import React from 'react'
import axios from 'axios';
import styles from './movieCard.module.css'

function MovieCard(props) {

    const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;

    return (
        <div className={styles.cardImage}>
            <img className={styles.cardPoster} src={imageUrl} alt='poster' />
        </div>
    )
}

export default MovieCard