import React from 'react'
import classes from './YearFolder.module.css'

import Folder from '../../../../Assests/Folder.svg'
import { Link } from 'react-router-dom'

const YearFolder = (props) => (
    <Link to={`/past-papers/${props.Grade}/${props.Month}-${props.Year}`} onClick={() => props.setselectedYear(props.Year, props.Month)} className={classes.Link}>
            <div className={classes.FolderContainer}>
                <div className={classes.ImgContainer}>
                    <img src={Folder} alt='' className={classes.Img}/>
                </div>
                <div className={classes.TitleContainer}>
                    <p className={classes.Title}>
                        {props.Year} - {props.Month}
                    </p>
                </div>
            </div>
    </Link>
        )


export default YearFolder