import React, { Component } from 'react'
import classes from './PastPapers.module.css'

import Grades from './Grade/Grade'
import {db} from '../../Utils/firebase'
import LoadingGrade from '../Grade/LoadingGrade/LoadingGrade'

class PastPapers extends Component {
    state = {
        Grades: [],
        Loading: true
    }


    componentDidMount = () => {
        db.collection('past-papers').get()
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


    render ( ) {
        return (
            <div className={classes.PastPapersPage}>
                <p className={classes.Welcome}>Welcome, {this.props.userName}   👋 </p>
                <h1 className={classes.Title}>Past Papers</h1>
                <div className={classes.GradeListContainer}>
                    {this.state.Loading ? 
                        <LoadingGrade />
                        :
                        <Grades
                            Grades={this.state.Grades}
                            setGrade={this.props.setGrade}
                        />
                    }   
                </div>
            </div>
        )
    }
};



export default PastPapers;