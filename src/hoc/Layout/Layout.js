import React from 'react'
import Results from '../../containers/Results/Results'
import Navigation from '../../containers/Navigation/Navigation'
// import classes from './Layout.module.scss'

const Layout = () => {
    return (
        <div className="container mx-auto">
            <Navigation/>
            <Results/>
        </div>
    )
}

export default Layout;
