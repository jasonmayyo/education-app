import React from 'react'
import classes from './Header.module.css'
import Logo from '../../Assests/WBHS-logo.svg'

const Header = () => (
    <div className={classes.HeaderContainer}>
        <img src={Logo} alt='WBHS' className={classes.Logo}/>
        <button className={classes.Button}>Logout</button>
    </div>
)


export default Header