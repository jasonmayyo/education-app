import React from 'react'
import classes from './Login.module.css'
import Waves from '../../Assests/waves.svg'
import Teacher from '../../Assests/Teacher.svg'
import GoogleLogo from '../../Assests/google-logo.svg'
import WBHSLogo from '../../Assests/WBHS-logo.svg'

const Login = () => {
    return (
        <div className={classes.LoginPage} >
            <div className={classes.Background}>
                <img src={Teacher} alt='teacher' className={classes.Teacher}/>
            </div>
            <div className={classes.WavesContainer}>
                <img src={Waves} className={classes.Waves}/>
            </div>
            <div className={classes.LoginFormContainer}>
                <img src={WBHSLogo} alt="WBHS" className={classes.SchoolLogo}/>
                <h1 className={classes.LoginTitle}>Login with your school email</h1>
                <button className={classes.LoginButton}>
                    <img src={GoogleLogo} className={classes.GoogleLogo}/>
                    <p className={classes.LoginButtonText}>Login with Google</p> 
                </button>
            </div>
        </div>
    )
}


export default Login