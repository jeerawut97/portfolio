import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css'
import img from '../assets/vite.svg'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <NavLink to="/" end><img src={img} alt="icon-header" height="120px" width="120px"/></NavLink>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/portfolio" className={({isActive}) => isActive? classes.active: undefined}>Portfolio</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;