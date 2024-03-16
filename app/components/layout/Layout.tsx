import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

async function Layout(props: any) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
