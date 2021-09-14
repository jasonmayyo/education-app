import React, { Component } from 'react'
import classes from './SelectGrade.module.css'
import Grade from '../Grade/Grade'
import {db} from '../../Utils/firebase'

class SelectGrade extends Component {
    state = {
        Grades: []
    }

    componentDidMount = () => {
        db.collection('Grades').get()
        .then( snapshot => {
            snapshot.forEach( doc => {
                const Grade = doc.data()
                const UpdatedGrades = [...this.state.Grades, Grade]
                this.setState({
                    Grades:  UpdatedGrades
                })
            })
        })
    }

    render() {
        return(
            <div className={classes.SelectGradePage}>
                <h1 className={classes.Title}>Select Your <p className={classes.GradeTitle}>Grade...</p></h1>
                <div className={classes.GradeListContainer}>
                    <Grade 
                        Grades={this.state.Grades}
                        setGrade={this.props.setGrade}
                    />      
                </div>
            </div>
        )
    }  
}

export default SelectGrade;