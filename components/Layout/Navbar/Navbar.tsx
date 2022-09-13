import Image from 'next/image';
import Link from 'next/link';
import useWindowSize from '../../../hooks/useWindowSize';

import styles from './Navbar.module.css';

const Navbar = () => {
  const { width, height } = useWindowSize();

  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <div>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/logo.png?alt=media&token=28dfec46-323c-4f0e-9821-d50a15cb03fa'
            alt='logo'
            width={80}
            height={40}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </Link>
      {width! >= 1200 && (
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
      )}
    </nav>
  );
};

export default Navbar;
