import { useState } from 'react';
import styles from './Hamburger.module.css';

const Hamburger = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${styles.hamburger} ${open && styles.open}`}
      onClick={handleOpen}
    ></div>
  );
};

export default Hamburger;
