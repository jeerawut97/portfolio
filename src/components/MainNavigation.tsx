import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css'
import img from '../assets/vite.svg'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div>
                <img src={img} alt="icon-header" height="75px" width="100px"/>
            </div>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive? classes.active: undefined} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({isActive}) => isActive? classes.active: undefined}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us" className={({isActive}) => isActive? classes.active: undefined}>About Us</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;