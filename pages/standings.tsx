import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/Standings.module.css';

const StandingsPage = () => {
  const [category, setCategory] = useState<string>('drivers');

  const categoryChangeHandler = (category: string) => {
    setCategory(category);
  };

  return (
    <main className={styles.standings}>
      <Head>
        <title>F1 Info - Standings</title>
        <meta
          name='description'
          content='F1 Info portal for quckly accesible data about F1.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>Standings</header>
      <div className={styles.category}>
        <button
          onClick={() => categoryChangeHandler('drivers')}
          className={`${styles.button} ${
            category === 'drivers' && styles.active
          }`}
        >
          Drivers
        </button>
        <button
          onClick={() => categoryChangeHandler('constructors')}
          className={`${styles.button} ${
            category === 'constructors' && styles.active
          }`}
        >
          Constructors
        </button>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default StandingsPage;
