import Link from 'next/link';
import { useState } from 'react';
import Hamburger from './Hamburger';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <section className={`${styles.menu} ${open && styles.open}`}>
      <Hamburger handleClick={handleOpen} isOpen={open} />
      <li className={styles.links}>
        <Link href='/results'>
          <ul onClick={handleOpen}>Results</ul>
        </Link>
        <Link href='/standings'>
          <ul onClick={handleOpen}>Standings</ul>
        </Link>
        <Link href='/schedule'>
          <ul onClick={handleOpen}>Schedule</ul>
        </Link>
        <Link href='/drivers'>
          <ul onClick={handleOpen}>Drivers</ul>
        </Link>
        <Link href='/constructors'>
          <ul onClick={handleOpen}>Constructors</ul>
        </Link>
      </li>
    </section>
  );
};

export default MobileMenu;
