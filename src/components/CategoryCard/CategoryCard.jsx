import React, { useState } from 'react'
import styles from './categoryCard.module.css'
import logo from '../../assets/image-1.png'
import classnames from 'classnames';
import Onboarding from '../../pages/Onboarding/Onboarding';
import CategoryChip from '../CategoryChip/CategoryChip';
import SingleCardOne from '../SingleCardOne/SingleCardOne';

function CategoryCard() {
  
  const [activeOne, setActiveOne] = useState(false)


  function handleClick() {
    if (activeOne === false) {
      setActiveOne(true)
    } else {
      setActiveOne(false)
    }

    localStorage.setItem("categoryOne", "Action")
    

    // const hello = document.getElementById('hello')
    // hello.innerText = 'SuperApp'
    // console.log(hello);

    // myRef.current = <CategoryChip name="Romance" />
    // console.log(myRef.current);
  }


  function SingleCardTwo() {


    return (
      <>

        <div onClick={handleClick} className={classnames(styles.card, styles.cardOne, styles.cardActive)}>
          <p> Action </p>

          <div className={classnames(styles.imgBack, styles.imgOne, styles.imgActive)}>

          </div>

        </div>

      </>
    )
  }

  return (
    <>

      {activeOne ? <SingleCardOne name1={logo} /> : <div onClick={handleClick} className={classnames(styles.card, styles.cardOne)}>
        <p> Action </p>

        <div className={classnames(styles.imgBack, styles.imgOne)}>

        </div>

      </div>}

      <div className={classnames(styles.card, styles.cardTwo)}>
        <p> Drama </p>

        <div className={classnames(styles.imgBack, styles.imgTwo)}>

        </div>

      </div>

      <div className={classnames(styles.card, styles.cardThree)}>
        <p> Romance </p>

        <div className={classnames(styles.imgBack, styles.imgThree)}>

        </div>

      </div>

      <div className={classnames(styles.card, styles.cardFour)}>
        <p> Thriller </p>

        <div className={classnames(styles.imgBack, styles.imgFour)}>

        </div>

      </div>

      <div className={classnames(styles.card, styles.cardFive)}>
        <p> Western </p>

        <div className={classnames(styles.imgBack, styles.imgFive)}>

        </div>

      </div>

      <div className={classnames(styles.card, styles.cardSix)}>
        <p> Horror </p>

        <div className={classnames(styles.imgBack, styles.imgSix)}>

        </div>

      </div>

      <div className={classnames(styles.card, styles.cardSeven)}>
        <p> Fantasy </p>

        <div className={classnames(styles.imgBack, styles.imgSeven)}>

        </div>

      </div>

      <div className={classnames(styles.card, styles.cardEight)}>
        <p> Music </p>

        <div className={classnames(styles.imgBack, styles.imgEight)}>

        </div>

      </div>

      <div className={classnames(styles.card, styles.cardNine)}>
        <p> Fiction </p>

        <div className={classnames(styles.imgBack, styles.imgNine)}>

        </div>

      </div>


    </>


  )
}

export default CategoryCard