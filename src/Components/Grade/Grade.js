import React from 'react'
import classes from './Grade.module.css'
import {Link} from 'react-router-dom'
import Shevron from '../../Assests/Right-shevron.svg'

const Grade = (props) => {
    return (
        <Link to={`/${props.Grade}/select-subject`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={classes.Grade}>
                <div className={classes.GradeTitleContainer}>
                    <p className={classes.GradeTitle}>Grade 12</p>
                    <p className={classes.Subjects}>Subjects: Maths & Physics</p>
                </div>
                <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
            </div>
        </Link>
    )
}

export default Grade