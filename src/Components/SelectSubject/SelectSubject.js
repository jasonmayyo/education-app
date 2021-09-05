import React from 'react'
import classes from './SelectSubject.module.css'
import {Link} from 'react-router-dom'
import Shevron from '../../Assests/Right-shevron.png'

const SelectSubject = ( props ) => {
    return(
        <div className={classes.SelectGradePage}>
            <h1 className={classes.Title}>Select Your Subject...</h1>
            <div className={classes.GradeListContainer}>
                <Link to={`/${props.Name}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={classes.Grade}>
                        <div className={classes.GradeTitleContainer}>
                            <p className={classes.GradeTitle}>Maths</p>
                            <p className={classes.Subjects}>Teacher: Mr King</p>
                        </div>
                        <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                    </div>
                </Link>
                <Link to={`/${props.Name}/`} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={classes.Grade}>
                        <div className={classes.GradeTitleContainer}>
                            <p className={classes.GradeTitle}>Physics</p>
                            <p className={classes.Subjects}>Teacher: Mrs Allway</p>
                        </div>
                        <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default SelectSubject