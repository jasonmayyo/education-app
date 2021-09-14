import React from 'react'
import classes from './Grade.module.css'
import {Link} from 'react-router-dom'
import Shevron from '../../Assests/Right-shevron.svg'
import Aux from '../../hoc/Aux'

const Grade = (props) => {
    return (
            <Aux>
                {props.Grades.map(Grade => (
                    <Link key={Grade.Grade} to={`/${Grade.Grade}/select-subject`} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className={classes.Grade} onClick={() => props.setGrade(Grade.Grade)}>
                            <div className={classes.GradeTitleContainer}>
                                <p className={classes.GradeTitle}>Grade {Grade.Grade}</p>
                                <p className={classes.Subjects}>{Grade.Subjects}</p>
                            </div>
                                <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                        </div>
                    </Link>
                ))}
            </Aux>
    )
}

export default Grade;