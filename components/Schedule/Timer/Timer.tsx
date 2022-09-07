import { useEffect, useState } from 'react';

import { getTimeToRace } from '../../../utils/getTimeToRace';
import styles from './Timer.module.css';

type Props = {
  time: string;
  date: string;
};

const Timer = ({ date, time }: Props) => {
  const [timeToRace, setTimeToRace] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(
      () => setTimeToRace(getTimeToRace(date, time)),
      1000
    );

    return () => clearTimeout(timer);
  }, [date, time, timeToRace]);

  return <time className={styles.timer}>{timeToRace}</time>;
};

export default Timer;
