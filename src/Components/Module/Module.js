import React, {Component} from 'react'
import classes from './Module.module.css'
import Lesson from '../Lesson/Lesson'
import ArrowDown from '../../Assests/arrow-down.svg'

class Module extends Component {
    state = {
        showContent: false,
        ModuleClicked: ''
    }

    render() {
        return(
            this.props.Modules.map( (module, index) => (
                <div className={module.Show ? classes.showModule : classes.Module} key={module.Title}>
                <div className={classes.SectionTitleContainer} onClick={() => module.Show ? this.props.hideContentHandler(index) : this.props.showContentHandler(index)}>
                    <p className={classes.SectionTitle}>{module.Title}</p>
                    <div className={classes.ShowContentButtonContanier}>
                        <button className={classes.ShowContentButton} onClick={() => module.Show ? this.props.hideContentHandler(index) : this.props.showContentHandler(index)}>
                            <img src={ArrowDown} alt='arrowDown' className={module.Show ? classes.ArrowUp : classes.ArrowDown}/>
                            <p className={classes.ShowContentText}>{module.Show ? "COLLAPES" : 'EXPAND'}</p>
                        </button>
                    </div>
                </div>
                <div className={module.Show ? classes.ShowModuleContent : classes.HideModuleContent}>
                    <Lesson 
                        Grade={this.props.Grade} 
                        Subject={this.props.Subject} 
                        Lessons={module.Lessons}
                        selectedLesson={this.props.selectedLesson}
                    />
                </div>     
            </div>
            ))
        )
    }
}

export default Module