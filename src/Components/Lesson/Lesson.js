import React, { Component } from 'react'
import classes from './Lesson.module.css'
import PlayButton from '../../Assests/play-button.svg'
import {Link} from 'react-router-dom'


class Lesson extends Component {
    render() {
        return(
            this.props.Lessons.map( Lesson => (
                <Link to={`/${this.props.Grade}/${this.props.Subject}/${Lesson.Title}`} className={classes.LinkContanier} onClick={() => this.props.selectedLesson(Lesson)}>
                    <div className={classes.LessonContainer}>
                        <p className={classes.LessonNumber}>02</p>
                        <div className={classes.LessonTitleContainer}>
                            <p className={classes.LessonTime}>{Lesson.Time}</p>
                            <p className={classes.LessonTitle}>{Lesson.Title}</p>
                        </div>
                        <img src={PlayButton} alt='Play' className={classes.PlayButton}/>
                    </div>
                </Link>
            ))
        )
    }
};


export default Lesson