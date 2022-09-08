import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Podium from '../components/Results/Podium';

import styles from '../styles/Results.module.css';

type Props = {
  resultsData: ResultDataType;
};

const ResultsPage = ({ resultsData }: Props) => {
  return (
    <main className={styles.results}>
      <Head>
        <title>F1 Info - Results</title>
        <meta
          name='description'
          content='F1 Info portal for quckly accesible data about F1.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>Results</header>
      <p className={styles.gp}>
        {resultsData.name}{' '}
        <span className={styles.flag}>
          <Image
            src={`https://countryflagsapi.com/png/${resultsData.country}`}
            alt={resultsData.country}
            width={20}
            height={15}
          />
        </span>
      </p>
      <Podium data={resultsData} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resultsReq = await fetch(
    'http://ergast.com/api/f1/current/last/results.json'
  );
  let resultsData;
  if (resultsReq.ok) {
    const resultsAPI: ResultAPI = await resultsReq.json();
    resultsData = {
      name: resultsAPI.MRData.RaceTable.Races[0].raceName,
      country: resultsAPI.MRData.RaceTable.Races[0].Circuit.Location.country,
      results: resultsAPI.MRData.RaceTable.Races[0].Results,
    };
  }

  return {
    props: {
      resultsData,
    },
  };
};

export default ResultsPage;
