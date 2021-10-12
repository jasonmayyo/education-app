import classes from './LoadingScreen.module.css'
import React, { useState } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import Logo from '../../Assests/Logo-2.svg'

const LoadingScreen  = () => {
    const [loading] = useState(true)
    return (
        <div className={classes.LoadingScreen}>
            <img src={Logo} className={classes.Logo} alt="WBHS"/>
            <BarLoader size={150} loading={loading} color={'#812A39'}/>
        </div>
    )
}

export default LoadingScreen