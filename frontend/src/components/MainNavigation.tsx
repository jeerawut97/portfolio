import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css'
import logoHome from '../assets/applications.png'
import logoPortfolio from '../assets/portfolio.png'
import logoDashboard from '../assets/dashboard.png'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <NavLink to="/" end><img src={logoHome} alt="logo-home" className={classes.img} /></NavLink>
            <NavLink to="/portfolio" end><img src={logoPortfolio} alt="logo-portfolio" className={classes.img} /></NavLink>
            <NavLink to="/dashboard" end><img src={logoDashboard} alt="logo-dashboard" className={classes.img} /></NavLink>
        </header>
    );
}

export default MainNavigation;