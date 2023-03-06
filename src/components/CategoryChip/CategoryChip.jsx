import React from 'react'
import classnames from 'classnames'
import styles from './categoryChip.module.css'

function CategoryChip(props) {
    return (
        <div className={styles.categoryChip}>
            <p> {props.name} </p>

            <div> X  </div>

        </div>
    )
}

export default CategoryChip