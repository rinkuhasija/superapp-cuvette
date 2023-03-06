import React from 'react'
import styles from './profileCard.module.css'
import CategoryChip from '../CategoryChip/CategoryChip'

function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileImage}>

      </div>

      <div className={styles.profileContent}>
        <p id={styles.name}> Vinay </p>
        <p id={styles.email}> vv@gmail.com </p>
        <h3 id={styles.user}>  Vinay007</h3>


        <div className={styles.selectedCategories}>

          <CategoryChip name={localStorage.getItem("categoryOne")} />
          <CategoryChip name="Romance" />
          <CategoryChip name="Romance" />

        </div>

      </div>

    </div>
  )
}

export default ProfileCard