import { GetStaticProps } from 'next';
import Head from 'next/head';
import Driver from '../components/Drivers/Driver';
import styles from '../styles/Drivers.module.css';

type Props = {
  driversData: {
    result: DriverData[];
  };
};

const DriversPage = ({ driversData }: Props) => {
  return (
    <main className={styles.main}>
      <Head>
        <title>F1 Info - Drivers</title>
        <meta
          name='description'
          content='F1 Info portal for quckly accesible data about F1.'
        />
        <link rel='icon' href='/bolid.png' />
      </Head>
      <header className={styles.header}>Drivers</header>
      <section className={styles.drivers}>
        {driversData.result.map((driver) => (
          <Driver key={driver.driverId} data={driver} />
        ))}
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const driversReq = await fetch(
    'https://ergast.com/api/f1/current/drivers.json'
  );

  let driversData;
  if (driversReq.ok) {
    const driversAPI: DriversAPI = await driversReq.json();
    driversData = {
      result: driversAPI.MRData.DriverTable.Drivers,
    };
  }

  return {
    props: {
      driversData,
    },
    revalidate: 60,
  };
};

export default DriversPage;
