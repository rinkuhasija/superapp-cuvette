import React from 'react'
import logo from '../../assets/image-1.png'

function SingleCardOne() {
    return (

        <React.Fragment>

            <div onClick={handleClick} className={classnames(styles.card, styles.cardOne, styles.cardActive)}>
                <p> Action </p>

                <div className={classnames(styles.imgBack, styles.imgActive)}>

                    <img width='180px' src={logo} alt='image-1'></img>

                </div>

            </div>

        </React.Fragment>

    )
}

export default SingleCardOne