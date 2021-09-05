import React from 'react'
import classes from './Lesson.module.css'
import PlayButton from '../../Assests/play-button.svg'


const Lesson = () => {
    return(
        <div className={classes.LessonContainer}>
            <p className={classes.LessonNumber}>01</p>
            <div className={classes.LessonTitleContainer}>
            <p className={classes.LessonTime}>19:20</p>
            <p className={classes.LessonTitle}>Circuit Diagrams</p>
            </div>
            <img src={PlayButton} alt='Play' className={classes.PlayButton}/>
        </div>
    )
};


export default Lesson