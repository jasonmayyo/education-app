import React from 'react'
import classes from './Subject.module.css'
import Module from '../Module/Module'

const Subject = () => {    
    return (
        <div className={classes.SelectGradePage}>
            <h1 className={classes.Title}>Physical Science</h1>
            <p className={classes.SubHeading}>Teacher: Mrs Allway</p>
            <div className={classes.ContentListContainer}>
                <p className={classes.CourseContent}>Course Content:</p>
                <Module />
                <Module />
            </div>
        </div>
    )
}

export default Subject