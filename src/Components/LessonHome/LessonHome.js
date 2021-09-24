import React from 'react'
import classes from './LessonHome.module.css'
import {Link} from 'react-router-dom'

const Classes = (props) => {
    return(
        <div className={classes.LessonHomePage}>
            <h1 className={classes.Title}>{props.selectedSubject.Subject}</h1>
            <p className={classes.SubHeading}>Teacher: {props.selectedSubject.Teacher}</p>
            <div className={classes.LessonTitelContainer}>
                <h1 className={classes.LessonTitle}>{props.selectedLesson.Title}</h1>
                <p className={classes.LessonBreadcrums} > 
                    <Link to='/select-grade' style={{ textDecoration: 'none', color: '#812A39' }}>Grade {props.selectedGrade}</Link>/ 
                    <Link to={`/${props.selectedGrade}/select-subject`} style={{ textDecoration: 'none', color: '#812A39' }}>{props.selectedSubject.Subject}</Link>/
                    <Link to={`/${props.selectedGrade}/select-subject`} style={{ textDecoration: 'none', color: '#812A39' }}>{props.selectedLesson.Title}</Link>
                </p>
            </div>
            <div className={classes.VideoContainer}>
                <iframe src={props.selectedLesson.VideoURL}
                    width="100%" 
                    height="100%" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                    title={props.selectedLesson.Title}>
                </iframe>
            </div>
                
            <div className={classes.LessonSummaryContainer}>
                <h1 className={classes.LessonSummaryTitle}>Lesson Summary</h1>
                <div className={classes.LessonSummaryContent}>
                    <div className={classes.LessonSummaryContentContainer}>
                        <p className={classes.LessonContentHeading}>Topic:</p>
                        <p className={classes.LessonContentSubheading}>{props.selectedLesson.Title}</p>
                        <p className={classes.LessonContentHeading}>Teacher:</p>
                        <p className={classes.LessonContentSubheading}>{props.selectedSubject.Teacher}</p>
                    </div>
                    <div className={classes.LessonSummaryContentContainer}>
                        <p className={classes.LessonContentHeading}>Subject:</p>
                        <p className={classes.LessonContentSubheading}>{props.selectedSubject.Subject}</p>
                        <p className={classes.LessonContentHeading}>Grade:</p>
                        <p className={classes.LessonContentSubheading}>{props.selectedGrade}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Classes