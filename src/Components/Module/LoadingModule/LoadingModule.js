import React from 'react'
import Aux from '../../../hoc/Aux'
import classes from './LoadingModule.module.css'

const LoadingModule = () => (
    <Aux>
        <div className={classes.Module}>
            <div className={classes.SectionTitleContainer}>
                <p className={classes.SectionTitle}></p>
            </div>
        </div>
        <div className={classes.Module}>
            <div className={classes.SectionTitleContainer}>
                <p className={classes.SectionTitle}></p>
            </div>
        </div>
        <div className={classes.Module}>
            <div className={classes.SectionTitleContainer}>
                <p className={classes.SectionTitle}></p>
            </div>
        </div>
    </Aux>
);

export default LoadingModule