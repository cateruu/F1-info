import styles from './Podium.module.css';

import Position from './Position';

type Props = {
  data: ResultDataType;
};

const Podium = ({ data }: Props) => {
  return (
    <section className={styles.podium}>
      <Position data={data.results[1]} />
      <Position data={data.results[0]} />
      <Position data={data.results[2]} />
    </section>
  );
};

export default Podium;
