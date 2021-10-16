import React from 'react';
import classes from './Blocked.module.css'
import Safe from '../../Assests/safe.svg'

const Blocked = (props) => (
    <div className={classes.Blocked}>
        <img src={Safe} alt='' className={classes.Safe}/>
        <h1 className={classes.Title}>Please use your Wbhs email to login...</h1>
        <p className={classes.SubTitle}>You need to use your wbhs email to have acces to the support plateform</p>
        <button className={classes.Button} onClick={props.Logout}>
            <p className={classes.ButtonTxt}>Back to Login</p>
        </button>
        <p className={classes.ForgotTxt}>Forgot email?</p>
    </div>
);

export default Blocked