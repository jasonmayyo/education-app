import React from 'react'
import Aux from '../../../hoc/Aux'
import classes from './LoadingModule.module.css'
import Shimmer from '../../../Containers/LoadingScreen/LoadingShimmer/LoadingShimmer'

const LoadingModule = () => (
    <Aux>
        <div className={classes.Module}>
            <div className={classes.SectionTitleContainer}>
                <div className={classes.Subjects}></div>
                <p className={classes.SectionTitle}></p>
            </div>
            <Shimmer />
        </div>
        <div className={classes.Module}>
            <div className={classes.SectionTitleContainer}>
                <div className={classes.Subjects}></div>
                <p className={classes.SectionTitle}></p>
            </div>
            <Shimmer />
        </div>
        <div className={classes.Module}>
            <div className={classes.SectionTitleContainer}>
                <div className={classes.Subjects}></div>
                <p className={classes.SectionTitle}></p>
            </div>
            <Shimmer />
        </div>
    </Aux>
);

export default LoadingModule