import Image from 'next/image';
import { useEffect } from 'react';
import { NextRaceType } from '../../../utils/types';
import styles from './NextRace.module.css';

type Props = {
  data: NextRaceType;
};

const NextRace = ({ data }: Props) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>Next Race: {data.name}</header>
      <Image
        src={`https://countryflagsapi.com/png/${data.country.toLowerCase()}`}
        alt={data.country}
        width={40}
        height={30}
      />
    </section>
  );
};

export default NextRace;
