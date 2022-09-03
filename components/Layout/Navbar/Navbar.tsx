import { useState } from 'react';

import Link from 'next/link';

import styles from './Navbar.module.css';

import Header from './Header';

import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineTrophy,
  AiOutlineTable,
  AiOutlineHistory,
} from 'react-icons/ai';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const openNavHandler = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (
    <nav className={`${styles.nav} ${navOpen === true && styles.open}`}>
      <div className={styles.container}>
        <Header openNavHandler={openNavHandler} navOpen={navOpen} />
        <Link href='/'>
          <section className={styles.section}>
            <div
              className={`${styles.compact} ${
                navOpen === true && styles.iconOpen
              }`}
            >
              <AiOutlineHome />
              <p
                className={`${styles.compactText} ${
                  navOpen === true && styles.openCompact
                }`}
              >
                Home
              </p>
            </div>
            <p className={styles.sectionText}>Home</p>
          </section>
        </Link>
        <Link href='/schedule'>
          <section className={styles.section}>
            <div
              className={`${styles.compact} ${
                navOpen === true && styles.iconOpen
              }`}
            >
              <AiOutlineCalendar />
              <p
                className={`${styles.compactText} ${
                  navOpen === true && styles.openCompact
                }`}
              >
                Schedule
              </p>
            </div>
            <p className={styles.sectionText}>Schedule</p>
          </section>
        </Link>
        <Link href='/results'>
          <section className={styles.section}>
            <div
              className={`${styles.compact} ${
                navOpen === true && styles.iconOpen
              }`}
            >
              <AiOutlineTrophy />
              <p
                className={`${styles.compactText} ${
                  navOpen === true && styles.openCompact
                }`}
              >
                Results
              </p>
            </div>
            <p className={styles.sectionText}>Results</p>
          </section>
        </Link>
        <Link href='/standings'>
          <section className={styles.section}>
            <div
              className={`${styles.compact} ${
                navOpen === true && styles.iconOpen
              }`}
            >
              <AiOutlineTable />
              <p
                className={`${styles.compactText} ${
                  navOpen === true && styles.openCompact
                }`}
              >
                Standings
              </p>
            </div>
            <p className={styles.sectionText}>Standings</p>
          </section>
        </Link>
        <Link href='/history'>
          <section className={styles.section}>
            <div
              className={`${styles.compact} ${
                navOpen === true && styles.iconOpen
              }`}
            >
              <AiOutlineHistory />
              <p
                className={`${styles.compactText} ${
                  navOpen === true && styles.openCompact
                }`}
              >
                History
              </p>
            </div>
            <p className={styles.sectionText}>History</p>
          </section>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
