import styles from './Hamburger.module.css';

type Props = {
  openNavHandler: () => void;
  navOpen: boolean;
};

const Hamburger = ({ openNavHandler, navOpen }: Props) => {
  return (
    <div className={styles.hamburger} onClick={openNavHandler}>
      <div className={styles.hamburgerLine}></div>
      <div
        className={`${styles.hamburgerLine} ${navOpen === true && styles.open}`}
      ></div>
      <div
        className={`${styles.hamburgerLine} ${navOpen === true && styles.open}`}
      ></div>
    </div>
  );
};

export default Hamburger;
