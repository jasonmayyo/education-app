import React from 'react'
import classes from './Drawer.module.css'
import {Link} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'

const Drawer = (props) => {
    return (
        <div className={props.showDrawer ? classes.DrawerContainer : classes.HideDrawerContainer}>
            <div className={classes.ProfileContainer}>
                <p className={classes.Welcome}>Welcome!</p>
                <h2 className={classes.Name}>{props.userName}</h2>
            </div>
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
                    <FiLogOut className={classes.Logouticon}/>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Drawer