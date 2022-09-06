import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made by{' '}
      <a
        href='https://github.com/cateruu'
        rel='noreferrer'
        target='_blank'
        className={styles.link}
      >
        Paweł
      </a>
      , Powered by{' '}
      <a
        href='http://ergast.com/mrd/'
        rel='noreferrer'
        target='_blank'
        className={styles.link}
      >
        Ergast API
      </a>
    </footer>
  );
};

export default Footer;
