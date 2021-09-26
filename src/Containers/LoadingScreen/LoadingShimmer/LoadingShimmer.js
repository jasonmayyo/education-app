import classes from './LoadingShimmer.module.css'
import React from 'react'

const Shimmer = () => (
    <div className={classes.ShimmerWrapper}>
        <div className={classes.Shimmer}></div>
    </div>
)

export default Shimmer