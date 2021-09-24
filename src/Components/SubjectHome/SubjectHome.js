import React, { Component } from 'react'
import classes from './SubjectHome.module.css'
import Module from '../Module/Module'
import {db} from '../../Utils/firebase'
import LoadingModule from '../Module/LoadingModule/LoadingModule'

class Subject extends Component { 
    state = {
        Subject: {
            Modules: []
        },
        Loading: true
    }


    componentDidMount = () => {
        db.collection('Grades').doc(this.props.match.params.grade).collection('Subjects').doc(this.props.match.params.subject).collection('Modules').get()
        .then( snapshot => {
            snapshot.forEach( doc => {
                const module = doc.data()
                const Subjects = {...this.state.Subject}
                Subjects.Modules = [...this.state.Subject.Modules, module]
                this.setState({
                    Subject: Subjects,
                    Loading: false
                })
            })
        })
        console.log(this.props.match.params.subject)
    }

    showContentHandler = (index) => {
        const Subject = {...this.state.Subject}
        const Module = {...this.state.Subject.Modules[index]}
        Module.Show = true
        Subject.Modules[index] = Module
        this.setState({
            Subject: Subject
        })
    }

    hideContentHandler = (index) => {
        const Subject = {...this.state.Subject}
        const Module = {...this.state.Subject.Modules[index]}
        Module.Show = false
        Subject.Modules[index] = Module
        this.setState({
            Subject: Subject
        })
    }

    render() {
        return (
            <div className={classes.SelectGradePage}>
                <h1 className={classes.Title}>{this.props.selectedSubject.Subject}</h1>
                <p className={classes.SubHeading}>Teacher: {this.props.selectedSubject.Teacher}</p>
                <div className={classes.ContentListContainer}>
                    <p className={classes.CourseContent}>Course Content:</p>
                    <div className={classes.ModuleListContainer}>
                        {this.state.Loading ? 
                        <LoadingModule /> :
                        <Module 
                            Grade={this.props.selectedGrade} 
                            Subject={this.props.selectedSubject} 
                            Modules={this.state.Subject.Modules}
                            showContentHandler={this.showContentHandler}
                            hideContentHandler={this.hideContentHandler}
                            selectedLesson={this.props.selectedLesson}
                        />}
                    </div>
                </div>
            </div>
        )
    } 
}

export default Subject