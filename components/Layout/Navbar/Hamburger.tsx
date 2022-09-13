import { useState } from 'react';
import styles from './Hamburger.module.css';

type Props = {
  handleClick: () => void;
  isOpen: boolean;
};

const Hamburger = ({ handleClick, isOpen }: Props) => {
  return (
    <div
      className={`${styles.hamburger} ${isOpen && styles.open}`}
      onClick={handleClick}
    ></div>
  );
};

export default Hamburger;
