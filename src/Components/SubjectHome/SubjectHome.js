import React from 'react'
import classes from './SubjectHome.module.css'
import Module from '../Module/Module'

const Subject = (props) => {    
    return (
        <div className={classes.SelectGradePage}>
            <h1 className={classes.Title}>Physical Science</h1>
            <p className={classes.SubHeading}>Teacher: Mrs Allway</p>
            <div className={classes.ContentListContainer}>
                <p className={classes.CourseContent}>Course Content:</p>
                <div className={classes.ModuleListContainer}>
                    <Module Grade={props.Grade} Subject={props.Subject} Lesson={props.Lesson}/>
                    <Module />
                    <Module />
                </div>
            </div>
        </div>
    )
}

export default Subject