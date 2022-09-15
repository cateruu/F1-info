import { GetStaticProps } from 'next';
import Head from 'next/head';
import CurrentRace from '../components/Schedule/CurrentRace/CurrentRace';
import Race from '../components/Schedule/Race/Race';
import styles from '../styles/Schedule.module.css';

type Props = {
  scheduleData: {
    result: ScheduleData[];
  };
  nextRaceData: {
    round: string;
  };
};

const SchedulePage = ({ scheduleData, nextRaceData }: Props) => {
  return (
    <main className={styles.schedule}>
      <Head>
        <title>F1 Info - Schedule</title>
        <meta
          name='description'
          content='F1 Info portal for quckly accesible data about F1.'
        />
        <link rel='icon' href='/bolid.png' />
      </Head>
      <header className={styles.header}>Schedule</header>
      <article className={styles.races}>
        {scheduleData.result.map((race) =>
          race.round === nextRaceData.round ? (
            <CurrentRace key={race.round} data={race} />
          ) : (
            <Race key={race.round} data={race} />
          )
        )}
      </article>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const scheduleReq = await fetch('http://ergast.com/api/f1/current.json');

  let scheduleData;
  if (scheduleReq.ok) {
    const scheduleAPI: ScheduleAPI = await scheduleReq.json();
    scheduleData = {
      result: scheduleAPI.MRData.RaceTable.Races,
    };
  }

  const nextRaceReq = await fetch(
    'https://ergast.com/api/f1/current/next.json'
  );
  let nextRaceData;
  if (nextRaceReq.ok) {
    const nextRaceAPI: NextRaceAPI = await nextRaceReq.json();
    nextRaceData = {
      round: nextRaceAPI.MRData.RaceTable.round,
    };
  }

  return {
    props: {
      scheduleData,
      nextRaceData,
    },
    revalidate: 60,
  };
};

export default SchedulePage;
