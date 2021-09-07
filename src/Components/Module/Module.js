import React, {useState} from 'react'
import classes from './Module.module.css'
import Lesson from '../Lesson/Lesson'
import ArrowDown from '../../Assests/arrow-down.svg'

const Module = (props ) => {

    const [showContent, setShowContent] = useState(false)

    return(
        <div className={showContent ? classes.showModule : classes.Module}>
            <div className={classes.SectionTitleContainer} onClick={() => setShowContent(!showContent)}>
                <p className={classes.SectionTitle}>Current Electricty</p>
                <div className={classes.ShowContentButtonContanier}>
                    <button className={classes.ShowContentButton} onClick={() => setShowContent(!showContent)}>
                        <img src={ArrowDown} alt='arrowDown' className={showContent ? classes.ArrowUp : classes.ArrowDown}/>
                        <p className={classes.ShowContentText}>{showContent ? "COLLAPES" : 'EXPAND'}</p>
                    </button>
                </div>
            </div>
            <div className={showContent ? classes.ShowModuleContent : classes.HideModuleContent}>
                <Lesson Grade={props.Grade} Subject={props.Subject} Lesson={props.Lesson} />
                <Lesson Grade={props.Grade} Subject={props.Subject} Lesson={props.Lesson} />
                <Lesson Grade={props.Grade} Subject={props.Subject} Lesson={props.Lesson} />
                <Lesson Grade={props.Grade} Subject={props.Subject} Lesson={props.Lesson} />
                <Lesson Grade={props.Grade} Subject={props.Subject} Lesson={props.Lesson} />
            </div>     
        </div>
    )
}

export default Module