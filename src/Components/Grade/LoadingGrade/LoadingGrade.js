import React from 'react'
import classes from './LoadingGrade.module.css'
import Aux from '../../../hoc/Aux'

const LoadingGrade = () => (
    <Aux>
        <div className={classes.Grade}>
            <div className={classes.GradeTitleContainer}>
                <div className={classes.GradeTitle}></div>
                <div className={classes.Subjects}></div>
            </div>
        </div>
        <div className={classes.Grade}>
            <div className={classes.GradeTitleContainer}>
                <div className={classes.GradeTitle}></div>
                <div className={classes.Subjects}></div>
            </div>
        </div>
    </Aux>
);

export default LoadingGrade