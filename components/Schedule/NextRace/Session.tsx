import { getLocalTime } from '../../../utils/getLocalTime';
import { getMonth } from '../../../utils/getMonth';
import styles from './Session.module.css';

type Props = {
  name: string;
  date: string;
  time: string;
};

const Session = ({ name, date, time }: Props) => {
  return (
    <div className={styles.session}>
      <div className={styles.date}>
        <p className={styles.day}>{date.split('-')[2]}</p>
        <p className={styles.month}>{getMonth(date)}</p>
      </div>
      <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <time className={styles.time}>{getLocalTime(date, time)}</time>
      </div>
    </div>
  );
};

export default Session;
