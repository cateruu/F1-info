import { useEffect, useState } from 'react';

import { getTimeToRace } from '../../../utils/getTimeToRace';
import styles from './Timer.module.css';

type Props = {
  time: string;
  date: string;
};

const Timer = ({ date, time }: Props) => {
  const [timeToRace, setTimeToRace] = useState<string>('Calculating...');

  useEffect(() => {
    const timer = setTimeout(
      () => setTimeToRace(getTimeToRace(date, time)),
      1000
    );

    return () => clearTimeout(timer);
  }, [date, time, timeToRace]);

  return (
    <section className={styles.timer}>
      <h3 className={styles.header}>Until Next Race</h3>
      <time className={styles.time}>{timeToRace}</time>
    </section>
  );
};

export default Timer;
