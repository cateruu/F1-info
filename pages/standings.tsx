import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Driver from '../components/Standings/Driver';

import styles from '../styles/Standings.module.css';

type Props = {
  driversData: {
    result: DriverType[];
  };
};

const StandingsPage = ({ driversData }: Props) => {
  const [category, setCategory] = useState<string>('drivers');

  console.log(driversData);

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
      {category === 'drivers' &&
        driversData.result.map((data) => (
          <Driver key={data.Driver.driverId} data={data} />
        ))}
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const driversReq = await fetch(
    'https://ergast.com/api/f1/current/driverStandings.json'
  );

  let driversData;
  if (driversReq.ok) {
    const driversAPI: DriversStandingsAPI = await driversReq.json();
    driversData = {
      result:
        driversAPI.MRData.StandingsTable.StandingsLists[0].DriverStandings,
    };
  }

  return {
    props: {
      driversData,
    },
  };
};

export default StandingsPage;
