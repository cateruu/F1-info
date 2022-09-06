import Image from 'next/image';
import { PrevRaceType } from '../../../utils/globals';
import styles from './PreviousRace.module.css';

type Props = {
  data: PrevRaceType;
};

const PreviousRace = ({ data }: Props) => {
  return (
    <section className={styles.prev}>
      <header className={styles.header}>
        <span className={styles.name}>Previous Race: {data.name}</span>
        <Image
          src={`https://countryflagsapi.com/png/${data.country}`}
          alt={data.country}
          width={40}
          height={30}
          className={styles.flag}
        />
      </header>
    </section>
  );
};

export default PreviousRace;
