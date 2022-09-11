import Image from 'next/image';
import { getMonth } from '../../../utils/getMonth';
import styles from './CurrentRace.module.css';

type Props = {
  data: ScheduleData;
};

const CurrentRace = ({ data }: Props) => {
  return (
    <section className={styles.current}>
      <Image
        src={`https://countryflagsapi.com/png/${data.Circuit.Location.country}`}
        alt={data.Circuit.Location.country}
        width={30}
        height={20}
        className={styles.flag}
      />
      <h3 className={styles.name}>{data.raceName}</h3>
      <p className={styles.track}>{data.Circuit.circuitName}</p>
      <p className={styles.date}>
        {data.FirstPractice.date.split('-')[2]} - {data.date.split('-')[2]}{' '}
        {getMonth(data.date)}
      </p>
    </section>
  );
};

export default CurrentRace;
