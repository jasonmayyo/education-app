import React from 'react'
import classes from './LoadingGrade.module.css'
import Aux from '../../../hoc/Aux'
import Shimmer from '../../../Containers/LoadingScreen/LoadingShimmer/LoadingShimmer'

const LoadingGrade = () => (
    <Aux>
        <div className={classes.Grade}>
            <div className={classes.GradeTitleContainer}>
                <div className={classes.GradeTitle}></div>
                <div className={classes.Subjects}></div>
            </div>
            <Shimmer />
        </div>
        <div className={classes.Grade}>
            <div className={classes.GradeTitleContainer}>
                <div className={classes.GradeTitle}></div>
                <div className={classes.Subjects}></div>
            </div>
            <Shimmer />
        </div>
    </Aux>
);

export default LoadingGrade