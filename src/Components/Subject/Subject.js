import React from 'react'
import classes from './Subject.module.css'
import {Link} from 'react-router-dom'
import Shevron from '../../Assests/play-button2.svg'

const Subject = (props) => {
    return(
        props.Subjects.map( Subject => (
            <Link to={`/${props.Grade}/${Subject.URL}`} style={{ textDecoration: 'none', color: 'black' }} key={Subject.Subject}>
                <div className={classes.Grade} onClick={() => props.setSubject(Subject.Subject, Subject.Teacher, Subject.URL)}>
                    <div className={classes.GradeTitleContainer}>
                        <p className={classes.GradeTitle}>{Subject.Subject}</p>
                        <p className={classes.Subjects}>Teacher: {Subject.Teacher}</p>
                    </div>
                    <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                </div>
            </Link>
        )) 
    )
}

export default Subject