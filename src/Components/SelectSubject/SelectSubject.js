import React from 'react'
import classes from './SelectSubject.module.css'
import Subject from '../Subject/Subject'

const SelectSubject = ( props ) => {
    return(
        <div className={classes.SelectGradePage}>
            <h1 className={classes.Title}>Select Your Subject...</h1>
            <div className={classes.GradeListContainer}>
                <Subject Grade={props.Grade} Subject={props.Subject}/>
            </div>
        </div>
    )
};

export default SelectSubject