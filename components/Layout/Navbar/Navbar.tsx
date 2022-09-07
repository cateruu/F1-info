import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Image src='/logo.png' alt='logo' width={80} height={40} />
      <li className={styles.links}>
        <ul>Results</ul>
        <ul>Standings</ul>
        <ul>Drivers</ul>
        <ul>Constructors</ul>
      </li>
    </nav>
  );
};

export default Navbar;
