import Head from 'next/head';
import { GetStaticProps } from 'next';

import styles from '../styles/Home.module.css';

import NextRace from '../components/Schedule/NextRace/NextRace';
import { NextRaceType, NextRaceAPI } from '../utils/types';
import Timer from '../components/Schedule/Timer/Timer';

type Props = {
  nextRaceData: NextRaceType;
};

const Home = ({ nextRaceData }: Props) => {
  return (
    <main className={styles.home}>
      <Head>
        <title>F1 Info</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextRace data={nextRaceData} />
      <Timer
        time={nextRaceData.sessions.race.time}
        date={nextRaceData.sessions.race.date}
      />
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
      track: nextRaceAPI.MRData.RaceTable.Races[0].Circuit.circuitId,
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

  return {
    props: {
      nextRaceData,
    },
  };
};

export default Home;
