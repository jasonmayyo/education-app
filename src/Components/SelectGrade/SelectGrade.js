import React, { Component } from 'react'
import classes from './SelectGrade.module.css'
import Grade from '../Grade/Grade'
import {db} from '../../Utils/firebase'
import LoadingGrade from '../Grade/LoadingGrade/LoadingGrade'

class SelectGrade extends Component {
    state = {
        Grades: [],
        Loading: true
    }

    componentDidMount = () => {
        db.collection('Grades').get()
        .then( snapshot => {
            snapshot.forEach( doc => {
                const Grade = doc.data()
                const UpdatedGrades = [...this.state.Grades, Grade]
                this.setState({
                    Grades:  UpdatedGrades,
                    Loading: false
                })
            })
        })
    }

    render() {
        return(
            <div className={classes.SelectGradePage}>
                <p className={classes.Welcome}>Hi, {this.props.userName}   👋 </p>
                <h1 className={classes.Title}>GRADES</h1>
                <div className={classes.GradeListContainer}>
                    {this.state.Loading ? 
                        <LoadingGrade />
                        :
                        <Grade 
                            Grades={this.state.Grades}
                            setGrade={this.props.setGrade}
                        />
                    }     
                </div>
            </div>
        )
    }  
}

export default SelectGrade;