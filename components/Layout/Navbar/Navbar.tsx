import Image from 'next/image';
import Link from 'next/link';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <Image
          src='/logo.png'
          alt='logo'
          width={80}
          height={40}
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <li className={styles.links}>
        <Link href='/results'>
          <ul>Results</ul>
        </Link>
        <Link href='/standings'>
          <ul>Standings</ul>
        </Link>
        <Link href='/schedule'>
          <ul>Schedule</ul>
        </Link>
        <Link href='/drivers'>
          <ul>Drivers</ul>
        </Link>
        <Link href='/constructors'>
          <ul>Constructors</ul>
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
