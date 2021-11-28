import React from 'react'
import classes from './File.module.css'
import PDF from '../../../../Assests/PDF.svg'
import Aux from '../../../../hoc/Aux'

const File = (props) => (
<Aux>
    {props.PastPapers.map(PastPaper => (
        <Aux key={PastPaper.Title}>
            <a href={PastPaper.Link} target="_blank" rel="noreferrer">
                <div className={classes.FileContainer} >
                    <div className={classes.ImgContainer}>
                        <img src={PDF} alt='' className={classes.Img}/>
                    </div>
                    <div className={classes.TitleContainer}>
                        <p className={classes.Title}>{PastPaper.Title}</p>
                    </div>
                </div>
            </a>
        </Aux>
    ))} 
</Aux>
);

export default File;