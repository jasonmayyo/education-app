import React from 'react'
import classes from './Grade.module.css'
import {Link} from 'react-router-dom'

import Aux from '../../../hoc/Aux'
import Folder from '../../../Assests/Folder.svg'


const Grade = (props) => {
    return (
            <Aux>
                {props.Grades.map(Grade => (
                    <Link key={Grade.Grade} to={`past-papers/${Grade.Grade}`} style={{ textDecoration: 'none', color: 'black' }} className={classes.LinkGrade}>
                        <div className={classes.Grade} onClick={() => props.setGrade(Grade.Grade)}>
                            <div className={classes.IconContainer}>
                                <img src={Folder} className={classes.Folder} alt=''/>
                            </div>
                            <div className={classes.GradeTitleContainer}>
                                <p className={classes.GradeTitle}>Grade {Grade.Grade}</p>
                                <p className={classes.Subjects}>2015-2019</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </Aux>
    )
}

export default Grade