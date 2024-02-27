import Link from 'next/link';
import Image from 'next/image';
import classes from './MainNavigation.module.css';
import logoHome from '/public/logo/applications.png';
import logoPort from '/public/logo/portfolio.png';
import logoDash from '/public/logo/dashboard.png';


function MainNavigation() {
  return (
    <header className={classes.header}>
      <ul>
          <li>
            <Link href='/'>
              <Image 
                src={logoHome}
                alt='logo-home'
              />
            </Link>
          </li>
          <li>
            <Link href='/dashboard'>
            <Image 
              src={logoDash}
              alt='logo-dashboard'
            />
            </Link>
          </li>
          <li>
            <Link href='/portfolio'>
            <Image 
              src={logoPort}
              alt='logo-portfolio'
            />
            </Link>
          </li>
        </ul>
    </header>
  );
}

export default MainNavigation;
