import React from 'react'
import styles from './content.module.css'
import Movies from '../../pages/Movies/Movies'
import logo from '../../assets/round-img.png'
import RowData from '../../constants/URLs'
import { Link } from 'react-router-dom'


//component for displaying movies poster fetched from API
function Content(props) {
    return (

        <div className={styles.movies}>

            <div className={styles.topText}>

                <h3> Super app</h3>
                <Link to='/home'> <div> <img src={logo}></img> </div>  </Link> 

            </div>

            <h3 className={styles.h3}> Entertainment according to your choice </h3>

            <div className={styles.categoryOne}>

                {RowData.map((el, i) => {
                    return <Movies key={i} title={el.title} url={el.url} />;
                })}

            </div>



        </div>
    )
}

export default Content