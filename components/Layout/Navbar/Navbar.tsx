'use client';

import Image from 'next/image';
import Link from 'next/link';
import useWindowSize from '../../../hooks/useWindowSize';
import MobileMenu from './MobileMenu';

import styles from './Navbar.module.css';

const Navbar = () => {
  const { width } = useWindowSize();

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
      {width! > 1200 && (
        <ul className={styles.links}>
          <Link href='/results'>
            <li>Results</li>
          </Link>
          <Link href='/standings'>
            <li>Standings</li>
          </Link>
          <Link href='/schedule'>
            <li>Schedule</li>
          </Link>
          <Link href='/drivers'>
            <li>Drivers</li>
          </Link>
          <Link href='/constructors'>
            <li>Constructors</li>
          </Link>
        </ul>
      )}
      {width! <= 1200 && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
