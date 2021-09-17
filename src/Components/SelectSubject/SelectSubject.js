import React, { Component } from 'react'
import classes from './SelectSubject.module.css'
import Subject from '../Subject/Subject'
import {db} from '../../Utils/firebase'

class SelectSubject extends Component {
    state = {
        Subjects: []
    }

    componentDidMount = () => {
        db.collection('Grades').doc(this.props.match.params.grade).collection('Subjects').get()
        .then( snapshot => {
            snapshot.forEach( doc => {
                const Subject = doc.data()
                const updatedSubjects = [...this.state.Subjects, Subject]
                this.setState({
                    Subjects: updatedSubjects
                })
            })
        })
        .catch((e) => console.log(e))
    }

    render() {
        return(
            <div className={classes.SelectGradePage}>
                <p className={classes.Welcome}>Grade: {this.props.selectedGrade}</p>
                <h1 className={classes.Title}>Subjects</h1>
                <div className={classes.GradeListContainer}>
                    <Subject 
                        Grade={this.props.selectedGrade} 
                        Subjects={this.state.Subjects}
                        setSubject={this.props.setSubject}
                    />
                </div>
            </div>
        )
    }
};

export default SelectSubject