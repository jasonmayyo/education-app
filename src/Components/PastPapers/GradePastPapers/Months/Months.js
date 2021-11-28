import React from 'react'
import classes from './Months.module.css'
import YearFolder from '../YearFolder/YearFolder'
import Aux from '../../../../hoc/Aux'

const Months = (props) => (
        <Aux>
            {props.PastPapers.map(Month => (
                <Aux key={Month.Month}>
                    <h1 className={classes.MonthTitle}>{Month.Month}</h1>
                    <div className={classes.FolderContainer}>
                        {Month.Years.map((year, key) => (
                            <YearFolder 
                                Month={Month.Month}
                                Year={year}
                                key={key}
                                Grade={props.Grade}
                                setselectedYear={props.setselectedYear}
                                selectedYear={props.selectedYear}
                            />
                        ))}
                    </div>
                </Aux>
            )) 
            }
        </Aux>
);

export default Months;