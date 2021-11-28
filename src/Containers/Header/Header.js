import React from 'react'
import classes from './Header.module.css'
import Logo from '../../Assests/logo-2.svg'
import {NavLink} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import { Squash as Hamburger } from 'hamburger-react'


const Header = (props) => {
        return(
            <div className={props.showDrawer ? classes.GrowHeaderContainer : classes.HeaderContainer}>
                <div className={classes.HeaderNav}>
                    <NavLink exact to='/'  >
                        <img src={Logo} alt='WBHS' className={classes.Logo}/>
                    </NavLink>
                    <div className={classes.DesktopNavContainer}>
                        <NavLink exact to='/' className={classes.Links} activeClassName={classes.ActiveLink}>
                            <p className={classes.LinkTextDsk}>Home</p>
                        </NavLink>
                        <NavLink exact to='/select-grade' className={classes.Links} activeClassName={classes.ActiveLink}>
                            Extra Lessons</NavLink>
                        <NavLink exact to='/past-papers' className={classes.Links} activeClassName={classes.ActiveLink}>Past Papers</NavLink>
                        <button className={classes.Button} onClick={props.Logout}>Logout</button>
                    </div>
                    <div className={classes.MobileNavContainer} onClick={props.setDrawer}>
                        <Hamburger className={classes.MobileNav} duration={0.5} size={20} toggled={props.showDrawer}/>
                    </div>
                </div>
                <div className={classes.DrawerContainer}>
                    <div className={classes.LinksContainer}>
                        <NavLink exact to='/' onClick={props.setDrawer} className={classes.Link} activeClassName={classes.ActiveLinkMLD}>
                        <p className={classes.LinkText}>Home</p>
                        </NavLink>
                        <NavLink exact to='/select-grade' onClick={props.setDrawer} className={classes.Link} activeClassName={classes.ActiveLinkMLD}>
                        <p className={classes.LinkText}>Extra Lessons</p>
                        </NavLink>
                        <NavLink exact to={`/past-papers`} onClick={props.setDrawer} className={classes.Link} activeClassName={classes.ActiveLinkMLD}>
                            <p className={classes.LinkText}>Past Papers</p>
                        </NavLink>
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