import { useState } from 'react';
import Hamburger from './Hamburger';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const openNavHandler = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (
    <nav className={`${styles.nav} ${navOpen === true && styles.open}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Hamburger openNavHandler={openNavHandler} navOpen={navOpen} />
          <p className={styles.headerText}>F1 Info</p>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
