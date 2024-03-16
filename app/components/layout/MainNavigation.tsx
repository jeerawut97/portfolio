import Link from 'next/link';
import Image from 'next/image';
import classes from './MainNavigation.module.css';
import logoHome from '/public/applications.png';
import logoPort from '/public/portfolio.png';
import logoDash from '/public/dashboard.png';


const MainNavigation = async function() {
  return (
    <header className={classes.header}>
      <ul>
          <li>
            <Link href='/'>
              <Image 
                src={logoHome}
                alt='logo-home'
                priority
              />
            </Link>
          </li>
          <li>
            <Link href='/dashboard'>
              <Image 
                src={logoDash}
                alt='logo-dashboard'
                priority
              />
            </Link>
          </li>
          <li>
            <Link href='/portfolio'>
              <Image 
                src={logoPort}
                alt='logo-portfolio'
                priority
              />
            </Link>
          </li>
        </ul>
    </header>
  );
}

export default MainNavigation;
