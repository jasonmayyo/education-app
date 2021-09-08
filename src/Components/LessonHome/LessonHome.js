import React from 'react'
import classes from './LessonHome.module.css'
import ReactPlayer from 'react-player/lazy'

const Classes = () => {
    return(
        <div className={classes.LessonHomePage}>
            <h1 className={classes.Title}>Physical Science</h1>
            <p className={classes.SubHeading}>Teacher: Mrs Allway</p>
            <div className={classes.LessonTitelContainer}>
                <h1 className={classes.LessonTitle}>Circut Diagrams</h1>
                <p className={classes.LessonBreadcrums}> Grade 12 - Physical Science - Power in electric circuits</p>
            </div>
            <div className={classes.VideoContainer}>
                <ReactPlayer  width='100%' height='100%' url='https://vimeo.com/593488053'/>
            </div>
            <div className={classes.LessonSummaryContainer}>
                <h1 className={classes.LessonSummaryTitle}>Lesson Summary</h1>
                <div className={classes.LessonSummaryContent}>
                    <div className={classes.LessonSummaryContentContainer}>
                        <p className={classes.LessonContentHeading}>Topic:</p>
                        <p className={classes.LessonContentSubheading}>Circut Diagrams</p>
                        <p className={classes.LessonContentHeading}>Teacher:</p>
                        <p className={classes.LessonContentSubheading}>Mrs Allway</p>
                    </div>
                    <div className={classes.LessonSummaryContentContainer}>
                        <p className={classes.LessonContentHeading}>Subject:</p>
                        <p className={classes.LessonContentSubheading}>Physical Science</p>
                        <p className={classes.LessonContentHeading}>Grade:</p>
                        <p className={classes.LessonContentSubheading}>11</p>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Classes