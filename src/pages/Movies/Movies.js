import React from 'react'
import styles from './movies.module.css'
import logo from '../../assets/round-img.png'
import axios from 'axios';
import { useState, useEffect } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';

function Movies(props) {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await axios.get(props.url);
        setMovies(response.data.results.slice(0, 5));
        console.log(response.data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <div className={styles.parent}>
            <h3> {props.title} </h3>

            <div className={styles.imagesFlex}>
                {movies.map((el, i) => {
                    return <MovieCard key={i} title={el.title} poster={el.poster_path} id={el.id} />;
                })}
            </div>



        </div>

    )
}

export default Movies