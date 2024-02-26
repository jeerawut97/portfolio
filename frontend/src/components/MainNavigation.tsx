import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css'
import logoHome from '../assets/applications.png'
import logoPortfolio from '../assets/portfolio.png'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <NavLink to="/" end><img src={logoHome} alt="icon-home" className={classes.img} /></NavLink>
            <NavLink to="/portfolio" end><img src={logoPortfolio} alt="icon-portfolio" className={classes.img} /></NavLink>
        </header>
    );
}

export default MainNavigation;