import React from 'react'
import classes from './ExtraLessons.module.css'
import Img1 from '../../../Assests/ExtraLessons-1.svg'
import Img2 from '../../../Assests/ExtraLessons-2.svg'
import Img3 from '../../../Assests/ExtraLessons-3.svg'

import {Link} from 'react-router-dom'



const ExtraLessons =  () => (
    <Link to='/select-grade' className={classes.Link}>
        <div className={classes.Card}>
            <div className={classes.Banner}>
                <img src={Img2} alt='' className={classes.Imgs}/>
                <img src={Img1} alt='' className={classes.Imgs}/>
                <img src={Img3} alt='' className={classes.Imgs}/>
            </div>
            <div className={classes.TitleContainer}>
                <p className={classes.Title}>Extra Lessons</p>
                <p className={classes.Subtitle}>Grades 10-12</p>
            </div>
        </div>
    </Link>
);


export default ExtraLessons