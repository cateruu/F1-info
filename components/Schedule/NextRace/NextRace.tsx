import { NextRaceType } from '../../../utils/types';
import styles from './NextRace.module.css';

type Props = {
  data: NextRaceType;
};

const NextRace = ({ data }: Props) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>Next Race: {data.name}</header>
    </section>
  );
};

export default NextRace;
