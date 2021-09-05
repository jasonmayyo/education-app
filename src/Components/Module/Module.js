import React, {useState} from 'react'
import classes from './Module.module.css'
import Lesson from '../Lesson/Lesson'
import ArrowDown from '../../Assests/arrow-down.svg'

const Module = ( ) => {

    const [showContent, setShowContent] = useState(false)

    return(
        <div className={showContent ? classes.showSection : classes.Section}>
            <div className={classes.SectionTitleContainer} onClick={() => setShowContent(!showContent)}>
                <p className={classes.SectionTitle}>Current Electricty</p>
                <div className={classes.ShowContentContanier}>
                    <button className={classes.ShowContent} onClick={() => setShowContent(!showContent)}>
                        <img src={ArrowDown} alt='arrowDown' className={showContent ? classes.ArrowUp : classes.ArrowDown}/>
                        <p className={classes.ShowContentText}>{showContent ? "COLLAPES" : 'EXPAND'}</p>
                    </button>
                </div>
            </div>
            <div className={showContent ? classes.ShowSectionContent : classes.SectionContent}>
                <Lesson />
                <Lesson />
            </div>     
        </div>
    )
}

export default Module