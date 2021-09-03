import React from 'react'
import classes from './SelectGrade.module.css'
import Shevron from '../../Assests/Right-shevron.png'

const SelectGrade = () => {
    return(
        <div className={classes.SelectGradePage}>
            <h1 className={classes.Title}>Select Your Grade...</h1>
            <div className={classes.GradeListContainer}>
                <div className={classes.Grade}>
                    <div className={classes.GradeTitleContainer}>
                        <p className={classes.GradeTitle}>Grade 11</p>
                        <p className={classes.Subjects}>Subjects: Maths & Physics</p>
                    </div>
                    <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                </div>
                <div className={classes.Grade}>
                    <div className={classes.GradeTitleContainer}>
                        <p className={classes.GradeTitle}>Grade 11</p>
                        <p className={classes.Subjects}>Subjects: Maths & Physics</p>
                    </div>
                    <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                </div>
            </div>
        </div>
    )
}

export default SelectGrade