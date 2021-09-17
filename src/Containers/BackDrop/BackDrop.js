import React from 'react'
import classes from './BackDrop.module.css'

const BackDrop = (props) => (
    props.showDrawer  ? <div className={classes.backdrop} onClick={props.setDrawer}></div> : null
)

export default BackDrop