import { useEffect, useState } from 'react';

import { getRaceTime } from '../../../utils/getRaceTime';
import { getTimeToRace } from '../../../utils/getTimeToRace';
import styles from './Timer.module.css';

type Props = {
  time: string;
  date: string;
};

const Timer = ({ time, date }: Props) => {
  const raceTime = getRaceTime(date, time);
  const [timeToRace, setTimeToRace] = useState<string>();

  useEffect(() => {
    const currentTime = Date.now();
    const toRace = raceTime - currentTime;

    if (toRace <= 0) {
      setTimeToRace('00:00:00');
      return;
    }

    const timer = setTimeout(() => setTimeToRace(getTimeToRace(toRace)), 1000);

    return () => clearTimeout(timer);
  }, [timeToRace, raceTime]);

  return (
    <section className={styles.timer}>
      <h3 className={styles.header}>Until Next Race</h3>
      <time className={styles.time}>{timeToRace}</time>
    </section>
  );
};

export default Timer;
