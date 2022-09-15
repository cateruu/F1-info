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

  return (
    <section className={styles.podium}>
      {width! > 1000 ? (
        <Position data={data.results[1]} />
      ) : (
        <Position data={data.results[0]} />
      )}
      {width! < 1000 ? (
        <Position data={data.results[1]} />
      ) : (
        <Position data={data.results[0]} />
      )}
      <Position data={data.results[2]} />
    </section>
  );
};

export default Podium;
