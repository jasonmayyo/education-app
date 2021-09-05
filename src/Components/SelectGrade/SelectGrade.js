import React from 'react'
import classes from './SelectGrade.module.css'
import Shevron from '../../Assests/Right-shevron.png'
import {Link} from 'react-router-dom'

const SelectGrade = () => {
    return(
        <div className={classes.SelectGradePage}>
            <h1 className={classes.Title}>Select Your Grade...</h1>
            <div className={classes.GradeListContainer}>
                <Link to='/select-subject' style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={classes.Grade}>
                        <div className={classes.GradeTitleContainer}>
                            <p className={classes.GradeTitle}>Grade 12</p>
                            <p className={classes.Subjects}>Subjects: Maths & Physics</p>
                        </div>
                        <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                    </div>
                </Link>
                <Link to='/select-subject' style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={classes.Grade}>
                        <div className={classes.GradeTitleContainer}>
                            <p className={classes.GradeTitle}>Grade 11</p>
                            <p className={classes.Subjects}>Subjects: Maths & Physics</p>
                        </div>
                        <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                    </div>
                </Link>
                <Link to='/select-subject' style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={classes.Grade}>
                        <div className={classes.GradeTitleContainer}>
                            <p className={classes.GradeTitle}>Grade 10</p>
                            <p className={classes.Subjects}>Subjects: Maths & Physics</p>
                        </div>
                        <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                    </div>
                </Link>
                <Link to='/select-subject' style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={classes.Grade}>
                        <div className={classes.GradeTitleContainer}>
                            <p className={classes.GradeTitle}>Grade 9</p>
                            <p className={classes.Subjects}>Subjects: Maths & Physics</p>
                        </div>
                        <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                    </div>
                </Link>
                <Link to='/select-subject' style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={classes.Grade}>
                        <div className={classes.GradeTitleContainer}>
                            <p className={classes.GradeTitle}>Grade 8</p>
                            <p className={classes.Subjects}>Subjects: Maths & Physics</p>
                        </div>
                        <img src={Shevron} alt='SELECT' className={classes.Shevron}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SelectGrade