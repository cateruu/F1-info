'use client';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made by{' '}
      <a href='https://github.com/cateruu' target='_blank' rel='noreferrer'>
        Paweł
      </a>
      , Powered by{' '}
      <a href='http://ergast.com/mrd/' target='_blank' rel='noreferrer'>
        Ergast API
      </a>
    </footer>
  );
};

export default Footer;
