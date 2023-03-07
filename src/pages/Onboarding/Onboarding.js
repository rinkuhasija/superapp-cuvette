import React, { useRef } from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import CategoryChip from '../../components/CategoryChip/CategoryChip'
import styles from './onboarding.module.css'
import { Link } from 'react-router-dom'

function Onboarding() {

    return (
        <div className={styles.onboardingRt}>

            <div className={styles.leftSection} id='hello'>
                <h1>Super app</h1> <br />

                <h2> Choose your entertainment category</h2>

                <div className={styles.selCategory}>
                    {/* selected categories will append here */}

                    {/* <CategoryChip name="Romance" /> */}


                </div>

            </div>


            <div className={styles.categorySection}>
                <CategoryCard />
            </div>

            <div className={styles.bottomRightBtn}>

                <Link to='/home'>  <button> <span>  Next Page </span>  </button>  </Link>

            </div>

        </div>
    )
}

export default Onboarding