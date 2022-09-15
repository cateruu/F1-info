import { useState } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import PositionLoader from '../Loaders/PositionLoader/PositionLoader';
import styles from './Podium.module.css';

import Position from './Position';

type Props = {
  data: ResultDataType;
};

const Podium = ({ data }: Props) => {
  const { width, height } = useWindowSize();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <section className={styles.podium}>
      {loading && (
        <>
          <PositionLoader />
          <PositionLoader />
          <PositionLoader />
        </>
      )}
      {!loading && (
        <>
          {width! > 1000 ? (
            <Position data={data.results[1]} setLoading={setLoading} />
          ) : (
            <Position data={data.results[0]} setLoading={setLoading} />
          )}
          {width! < 1000 ? (
            <Position data={data.results[1]} setLoading={setLoading} />
          ) : (
            <Position data={data.results[0]} setLoading={setLoading} />
          )}
          <Position data={data.results[2]} setLoading={setLoading} />
        </>
      )}
    </section>
  );
};

export default Podium;
