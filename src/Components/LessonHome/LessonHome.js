import React from 'react'
import classes from './LessonHome.module.css'
import {Link} from 'react-router-dom'
import LessonNotes from '../../Assests/lessonnotes.svg'
import Worksheet from '../../Assests/Worksheet.svg'
import Memo from '../../Assests/Memo.svg'

const Classes = (props) => {
    return(
        <div className={classes.LessonHomePage}>
            <h1 className={classes.Title}>{props.selectedSubject.Subject}</h1>
            <p className={classes.SubHeading}>Teacher: {props.selectedSubject.Teacher}</p>
            <div className={classes.LessonTitelContainer}>
                <h1 className={classes.LessonTitle}>{props.selectedLesson.Title}</h1>
                <p className={classes.LessonBreadcrums} > 
                    <Link to='/select-grade' style={{ textDecoration: 'none', color: '#812A39' }}>Grade {props.selectedGrade}</Link> - <Link to={`/${props.selectedGrade}/select-subject`} style={{ textDecoration: 'none', color: '#812A39' }}>{props.selectedSubject.Subject}</Link> - <Link to={`/${props.selectedGrade}/select-subject`} style={{ textDecoration: 'none', color: '#812A39' }}>{props.selectedLesson.Title}</Link>
                </p>
            </div>
            <div className={classes.VideoContainer}>
                <iframe src={props.selectedLesson.VideoURL}
                    width="100%" 
                    height="100%" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                    title={props.selectedLesson.Title}
                    className={classes.Video}>
                </iframe>
            </div>
                
            <div className={classes.LessonSummaryContainer}>
                <h1 className={classes.Documents}>Documents</h1>
                    <div className={classes.DocsLinkContanier}>
                        <a  className={classes.DocsLink} rel="noreferrer"  href={props.selectedLesson.Notes}
                            target='_blank'>
                            <div className={classes.DocsButton}>
                                <img src={LessonNotes} alt='' className={classes.Docimg}/>
                                <h1 className={classes.DocTitle}>Lesson Notes</h1>
                                <h3 className={classes.DocType}>PDF</h3>
                            </div>
                        </a>
                        <a  className={classes.DocsLink} rel="noreferrer"  href={props.selectedLesson.Worksheet}
                            target='_blank'>
                            <div className={classes.DocsButton}>
                                <img src={Worksheet} alt='' className={classes.Docimg}/>
                                <h1 className={classes.DocTitle}>Worksheet</h1>
                                <h3 className={classes.DocType}>PDF</h3>
                            </div>
                        </a>
                        <a  className={classes.DocsLink} rel="noreferrer"  href={props.selectedLesson.Memo}
                            target='_blank'>
                            <div className={classes.DocsButton}>
                                <img src={Memo} alt='' className={classes.Docimg}/>
                                <h1 className={classes.DocTitle}>Memo</h1>
                                <h3 className={classes.DocType}>PDF</h3>
                            </div>
                        </a>
                    </div>
            </div>
        </div>
    )
};


export default Classes