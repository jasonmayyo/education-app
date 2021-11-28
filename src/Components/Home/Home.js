import React from 'react'
import classes from './Home.module.css'

import ExtraLessons from './ExtraLessons/ExtraLessons'
import PastPapers from './PastPapers/PastPapers'
 
const Home = (props) => (
    <div className={classes.HomePage}>
        <ExtraLessons />
        <PastPapers />
    </div>
);

export default Home