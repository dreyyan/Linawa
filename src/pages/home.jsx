import React from 'react'
import Grid from '../components/Grid'

import './styles/home.css'
const home = () => {
  return (
    <>
        <Grid/>
        <div className="flexContainer">
            <h1 className="mainPageTitle">LINAWA</h1>
            <q className="titleQuote">Linaw ng Bayan</q>
        </div>
    </>
  )
}

export default home