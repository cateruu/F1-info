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
        <Hamburger openNavHandler={openNavHandler} navOpen={navOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
