import React from 'react'
import classes from './SelectGrade.module.css'
import Grade from '../Grade/Grade'

const SelectGrade = (props) => {
    return(
        <div className={classes.SelectGradePage}>
            <h1 className={classes.Title}>Select Your Grade...</h1>
            <div className={classes.GradeListContainer}>
                <Grade Grade={props.Grade}/>
                <Grade Grade={props.Grade}/>        
                <Grade Grade={props.Grade}/>        
            </div>
        </div>
    )
}

export default SelectGrade