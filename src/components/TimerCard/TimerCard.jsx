import React from 'react'
import styles from './timerCard.module.css'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function TimerCard() {

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Too lale...</div>;
        }

        return (
            <div className={styles.timer}>
                <div className={styles.text}>Remaining</div>
                <div className={styles.value}>{remainingTime}</div>
                <div className={styles.text}>seconds</div>
            </div>
        );
    };


    return (
        <div className={styles.timerCard}>

            <div className={styles.timeRound}>
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    colors={["#FF6A6A", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                    onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                >
                    {renderTime}
                </CountdownCircleTimer>


            </div>

            <div className={styles.timeAndButton}>

                <div>
                    Hello 
                </div>

                <button> <span> Start </span>  </button>


            </div>


        </div>
    )
}

export default TimerCard