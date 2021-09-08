import React from 'react'
import classes from './Subject.module.css'
import {Link} from 'react-router-dom'
import Shevron from '../../Assests/Right-shevron.svg'

const Subject = (props) => {
    return(
        <Link to={`/${props.Grade}/${props.Subject}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={classes.Grade}>
                <div className={classes.GradeTitleContainer}>
                    <p className={classes.GradeTitle}>Maths</p>
                    <p className={classes.Subjects}>Teacher: Mr King</p>
                </div>
                <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
            </div>
        </Link>
    )
}

export default Subject