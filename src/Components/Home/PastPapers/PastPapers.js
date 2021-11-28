import React from 'react'
import classes from './PastPapers.module.css'
import Img1 from '../../../Assests/PastPapers-1.svg'
import Img2 from '../../../Assests/PastPapers-2.svg'

import {Link} from 'react-router-dom'


const PastPapers = () => (
    <Link to='/past-papers' className={classes.Link}>
        <div className={classes.Card}>
            <div className={classes.Banner}>
                <img src={Img2} alt='' className={classes.Imgs}/>
                <img src={Img1} alt='' className={classes.Imgs}/>
            </div>
            <div className={classes.TitleContainer}>
                <p className={classes.Title}>Past Papers</p>
                <p className={classes.Subtitle}>Grades 8-12</p>
            </div>
        </div>
    </Link>
);


export default PastPapers;