import React from 'react'
// ROUTING
import {Link} from "react-router-dom";
// PAGES
import Candidates from '../pages/candidates.jsx'
import Policies from '../pages/policies.jsx'
import PetitionsAndReports from '../pages/petitions-and-reports.jsx'
import News from '../pages/news.jsx'
import AboutUs from '../pages/about-us.jsx'
import HomePage from '../pages/homePage.jsx';
// STYLE
import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.divNavigation}>
                <Link to ="/pages/homepage"><img src="../public/logo-linawa.png" className={styles.logo}/></Link>
                <nav className={styles.navLinks}>
                    <Link to="/pages/candidates" className={styles.navLink}>CANDIDATES</Link>
                    <Link to="/pages/policies" className={styles.navLink}>POLICIES</Link>
                    <Link to="/pages/petitions-and-reports" className={styles.navLink}>PETITIONS & REPORTS</Link>
                </nav>
            </div>
        </>
    )
}
export default Header
