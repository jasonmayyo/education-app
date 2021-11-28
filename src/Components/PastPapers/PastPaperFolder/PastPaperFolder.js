import React, { Component } from 'react'
import classes from './PastPaperFolder.module.css'
import File from './File/File'
import {db} from '../../../Utils/firebase'

class PastPaperFolder extends Component {
    state = {
        PastPapers: [],
    }



    componentDidMount = () => {
        db.collection('past-papers')
            .doc(this.props.selectedGrade)
                .collection('Months')
                    .doc(this.props.selectedMonth.toLowerCase())
                        .collection('Year')
                            .doc(this.props.selectedYear)
                                .collection('PastPapers').get()
                                .then( snapshot => {
                                    snapshot.forEach( doc => {
                                        const PastPaper = doc.data()
                                        const updatedPastPapers = [...this.state.PastPapers, PastPaper]
                                        this.setState({
                                            PastPapers:  updatedPastPapers,
                                            Loading: false
                                        })
                                    })
                                })
    }



    render() {
        return (
            <div className={classes.PastPaperFolderPage}>
            <p className={classes.Welcome}>Grade {this.props.selectedGrade}</p>
            <h1 className={classes.Title}>Past Papers</h1>
    
            <h1 className={classes.MonthTitle}>{this.props.selectedMonth} - {this.props.selectedYear}</h1>
            <div className={classes.FileContainer}>
                    <File 
                        PastPapers={this.state.PastPapers}
                    />
            </div>
        </div>
        )
    }
};


export default PastPaperFolder;