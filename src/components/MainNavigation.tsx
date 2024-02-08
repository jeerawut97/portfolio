import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/portfolio" className={({isActive}) => isActive? classes.active: undefined}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive? classes.active: undefined} end>
                            My Home
                        </NavLink>
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