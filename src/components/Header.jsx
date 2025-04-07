import React from "react";
// ROUTING
import { NavLink } from "react-router-dom";
// PAGES
import Candidates from "../pages/candidates.jsx";
import Policies from "../pages/policies.jsx";
import PetitionsAndReports from "../pages/petitions-and-reports.jsx";
import News from "../pages/news.jsx";
import AboutUs from "../pages/about-us.jsx";
import HomePage from "../pages/homePage.jsx";
import MockElectionPage from "../pages/mock-election.jsx";
// STYLE
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.divNavigation}>
        <NavLink
          to="/pages/homepage"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          <img src="../public/logo-linawa.png" className={styles.logo} />
        </NavLink>
        <nav className={styles.navLinks}>
          <NavLink
            to="/pages/mock-election"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
            }
          >
            MOCK ELECTION
          </NavLink>
          <NavLink
            to="/pages/candidates"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
            }
          >
            CANDIDATES
          </NavLink>
          <NavLink
            to="/pages/policies"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
            }
          >
            POLICIES
          </NavLink>
          <NavLink
            to="/pages/petitions-and-reports"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
            }
          >
            PETITIONS & REPORTS
          </NavLink>
        </nav>
      </div>
    </>
  );
};
export default Header;
