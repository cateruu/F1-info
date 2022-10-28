import Head from 'next/head';
import { GetStaticProps } from 'next';

import styles from '../styles/Home.module.css';

import NextRace from '../components/Schedule/NextRace/NextRace';
import PreviousRace from '../components/Schedule/PreviousRace/PreviousRace';

type Props = {
  nextRaceData: NextRaceType;
  prevRaceData: ResultDataType;
};

const Home = ({ nextRaceData, prevRaceData }: Props) => {
  return (
    <main className={styles.home}>
      <Head>
        <title>F1 Info</title>
        <meta
          name='description'
          content='F1 Info portal for quckly accesible data about F1.'
        />
        <link rel='icon' href='/bolid.png' />
      </Head>
      <NextRace data={nextRaceData} />
      <PreviousRace data={prevRaceData} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const nextRaceReq = await fetch(
    'https://ergast.com/api/f1/current/next.json'
  );
  let nextRaceData;
  if (nextRaceReq.ok) {
    const nextRaceAPI: NextRaceAPI = await nextRaceReq.json();
    nextRaceData = {
      name: nextRaceAPI.MRData.RaceTable.Races[0].raceName,
      country: nextRaceAPI.MRData.RaceTable.Races[0].Circuit.Location.country,
      track: nextRaceAPI.MRData.RaceTable.Races[0].Circuit.circuitName,
      trackId: nextRaceAPI.MRData.RaceTable.Races[0].Circuit.circuitId,
      sessions: {
        fp1: {
          time: nextRaceAPI.MRData.RaceTable.Races[0].FirstPractice.time,
          date: nextRaceAPI.MRData.RaceTable.Races[0].FirstPractice.date,
        },
        fp2: {
          time: nextRaceAPI.MRData.RaceTable.Races[0].SecondPractice.time,
          date: nextRaceAPI.MRData.RaceTable.Races[0].SecondPractice.date,
        },
        fp3: {
          time: nextRaceAPI.MRData.RaceTable.Races[0].ThirdPractice.time,
          date: nextRaceAPI.MRData.RaceTable.Races[0].ThirdPractice.date,
        },
        qualifying: {
          time: nextRaceAPI.MRData.RaceTable.Races[0].Qualifying.time,
          date: nextRaceAPI.MRData.RaceTable.Races[0].Qualifying.date,
        },
        race: {
          time: nextRaceAPI.MRData.RaceTable.Races[0].time,
          date: nextRaceAPI.MRData.RaceTable.Races[0].date,
        },
      },
    };
  }

  const prevRaceReq = await fetch(
    'http://ergast.com/api/f1/current/last/results.json?limit=10'
  );
  let prevRaceData;
  if (prevRaceReq.ok) {
    const prevRaceAPI: ResultAPI = await prevRaceReq.json();
    prevRaceData = {
      name: prevRaceAPI.MRData.RaceTable.Races[0].raceName,
      country: prevRaceAPI.MRData.RaceTable.Races[0].Circuit.Location.country,
      results: prevRaceAPI.MRData.RaceTable.Races[0].Results,
    };
  }

  return {
    props: {
      nextRaceData,
      prevRaceData,
    },
    revalidate: 1,
  };
};

export default Home;
