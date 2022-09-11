import Image from 'next/image';
import { getMonth } from '../../../utils/getMonth';
import styles from './Race.module.css';

type Props = {
  data: ScheduleData;
};

const Race = ({ data }: Props) => {
  if (data.Circuit.Location.country === 'UAE') {
    data.Circuit.Location.country = 'are';
  }

  return (
    <section className={styles.race}>
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
        {data.date.split('-')[2]} {getMonth(data.date)}
      </p>
    </section>
  );
};

export default Race;
