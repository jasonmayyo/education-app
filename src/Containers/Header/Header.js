import React from 'react'
import classes from './Header.module.css'
import Logo from '../../Assests/WBHS-logo.svg'
import {Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'


const Header = (props) => {
        return(
            <div className={classes.HeaderContainer}>
                <img src={Logo} alt='WBHS' className={classes.Logo}/>
                <div className={classes.DesktopNavContainer}>
                    <Link to='/select-grade' className={classes.Links}>Grades</Link>
                    <Link to={props.selectedGrade ? `/${props.selectedGrade}/select-subject` : '/select-grade' } className={classes.Links}>Subjects</Link>
                    <button className={classes.Button} onClick={props.Logout}>Logout</button>
                </div>
                <div className={classes.MobileNavContainer} onClick={props.setDrawer}>
                    <BiMenu className={classes.MobileNav}/>
                </div>
            </div>
        )
}


export default Header