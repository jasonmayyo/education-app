import React from 'react'
import classes from './Header.module.css'
import Logo from '../../Assests/WBHS-logo.svg'
import {Link} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import { Squash as Hamburger } from 'hamburger-react'


const Header = (props) => {
        return(
            <div className={props.showDrawer ? classes.GrowHeaderContainer : classes.HeaderContainer}>
                <div className={classes.HeaderNav}>
                    <img src={Logo} alt='WBHS' className={classes.Logo}/>
                    <div className={classes.DesktopNavContainer}>
                        <Link to='/select-grade' className={classes.Links}>Grades</Link>
                        <Link to={props.selectedGrade ? `/${props.selectedGrade}/select-subject` : '/select-grade' } className={classes.Links}>Subjects</Link>
                        <button className={classes.Button} onClick={props.Logout}>Logout</button>
                    </div>
                    <div className={classes.MobileNavContainer} onClick={props.setDrawer}>
                        <Hamburger className={classes.MobileNav} duration={0.8}/>
                    </div>
                </div>
                <div className={classes.DrawerContainer}>
                    <div className={classes.LinksContainer}>
                        <Link to='/select-grade' onClick={props.setDrawer} className={classes.Link}>
                        <p className={classes.LinkText}>Grades</p>
                        </Link>
                        <Link to={`/${props.selectedGrade}/select-subject`}onClick={props.setDrawer} className={classes.Link}>
                            <p className={classes.LinkText}>Subjects</p>
                        </Link>
                    </div>
                    <div className={classes.LogoutContainer}>
                        <button className={classes.LogoutButton} onClick={props.Logout}>
                            {props.showDrawer ? <FiLogOut className={classes.Logouticon}/> : null}
                            Logout
                        </button>
                </div>
                </div>
            </div>
        )
}


export default Header