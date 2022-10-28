import { useState } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import PositionLoader from '../Loaders/PositionLoader/PositionLoader';
import styles from './Podium.module.css';

import Position from './Position';

type Props = {
  data: ResultDataType;
};

const Podium = ({ data }: Props) => {
  const { width } = useWindowSize();

  const getPositionData = (
    data: ResultDataType,
    position: number
  ): ResultType | undefined => {
    if (width >= 1000) {
      switch (position) {
        case 1:
          return data.results[0];
        case 2:
          return data.results[1];
      }
    }

    switch (position) {
      case 1:
        return data.results[1];
      case 2:
        return data.results[0];
    }
  };

  return (
    <section className={styles.podium}>
      <Position data={getPositionData(data, 2)} />
      <Position data={getPositionData(data, 1)} />
      <Position data={data.results[2]} />
    </section>
  );
};

export default Podium;
