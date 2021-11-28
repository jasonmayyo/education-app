import React, {Component} from 'react'
import classes from './GradePastPapers.module.css'
import {db} from '../../../Utils/firebase'
import Months from './Months/Months'

class GradePastPapers extends Component {
    state = {
        PastPapers: [],
        Loading: false,
        selectedYear: '',
        selectedMonth: ''
    }

    componentDidMount = () => {
        db.collection('past-papers').doc(this.props.selectedGrade).collection('Months').get()
            .then ( snapshot => {
                snapshot.forEach( doc => {
                    const PastPaper = doc.data()
                    const updatedPastPapers = [...this.state.PastPapers, PastPaper]
                    this.setState({
                        PastPapers: updatedPastPapers,
                        Loading: false
                    })          
                })
            })
    }

    render () {
        return (
            <div className={classes.GradePastPapersPage}>
                <p className={classes.Welcome}>Grade {this.props.selectedGrade}</p>
                <h1 className={classes.Title}>Past Papers</h1>
                <Months 
                    PastPapers={this.state.PastPapers}
                    Grade={this.props.selectedGrade}
                    setselectedYear={this.props.setselectedYear}
                    selectedYear={this.props.selectedYear}
                />
            </div>

        )
    }
};


export default GradePastPapers