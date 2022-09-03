import styles from './Header.module.css';

import Hamburger from './Hamburger';

type Props = {
  openNavHandler: () => void;
  navOpen: boolean;
};

const Header = ({ openNavHandler, navOpen }: Props) => {
  return (
    <header className={styles.header}>
      <Hamburger openNavHandler={openNavHandler} navOpen={navOpen} />
      <p className={styles.headerText}>F1 Info</p>
    </header>
  );
};

export default Header;
