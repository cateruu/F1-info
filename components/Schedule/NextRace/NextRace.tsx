import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getLocalTime, getMonth } from '../../../utils/getDate';
import { NextRaceType } from '../../../utils/types';
import styles from './NextRace.module.css';

type Props = {
  data: NextRaceType;
};

type TrackImg = {
  name: string;
  image: string | undefined;
};

const NextRace = ({ data }: Props) => {
  const [trackImg, setTrackImg] = useState<TrackImg>();

  useEffect(() => {
    const fetchTrack = async () => {
      const req = await fetch('/api/tracks');
      const res = await req.json();

      if (data.track in res) {
        setTrackImg(res[data.track]);
      }
    };

    fetchTrack().catch((err) => console.error(err));
  }, [data]);

  console.log(trackImg);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <span className={styles.name}>Next Race: {data.name}</span>
        <Image
          src={`https://countryflagsapi.com/png/${data.country}`}
          alt={data.country}
          width={40}
          height={30}
          className={styles.flag}
        />
      </header>
      <div className={styles.container}>
        <div className={`${styles.session} ${styles.race}`}>
          <div className={styles.date}>
            <p className={styles.day}>
              {data.sessions.race.date.split('-')[2]}
            </p>
            <span className={styles.month}>
              {getMonth(data.sessions.race.date)}
            </span>
          </div>
          <div className={styles.typeContainer}>
            <p className={styles.type}>Race</p>
            <time className={styles.time}>
              {getLocalTime(data.sessions.race.date, data.sessions.race.time)}
            </time>
          </div>
        </div>
        <div className={`${styles.session} ${styles.qualifying}`}>
          <div className={styles.date}>
            <p className={styles.day}>
              {data.sessions.qualifying.date.split('-')[2]}
            </p>
            <span className={styles.month}>
              {getMonth(data.sessions.qualifying.date)}
            </span>
          </div>
          <div className={styles.typeContainer}>
            <p className={styles.type}>Qualifying</p>
            <time className={styles.time}>
              {getLocalTime(
                data.sessions.qualifying.date,
                data.sessions.qualifying.time
              )}
            </time>
          </div>
        </div>
        <div className={`${styles.session} ${styles.fp3}`}>
          <div className={styles.date}>
            <p className={styles.day}>{data.sessions.fp3.date.split('-')[2]}</p>
            <span className={styles.month}>
              {getMonth(data.sessions.fp3.date)}
            </span>
          </div>
          <div className={styles.typeContainer}>
            <p className={styles.type}>Practice 3</p>
            <time className={styles.time}>
              {getLocalTime(data.sessions.fp3.date, data.sessions.fp3.time)}
            </time>
          </div>
        </div>
        <div className={`${styles.session} ${styles.fp2}`}>
          <div className={styles.date}>
            <p className={styles.day}>{data.sessions.fp2.date.split('-')[2]}</p>
            <span className={styles.month}>
              {getMonth(data.sessions.fp2.date)}
            </span>
          </div>
          <div className={styles.typeContainer}>
            <p className={styles.type}>Practice 2</p>
            <time className={styles.time}>
              {getLocalTime(data.sessions.fp2.date, data.sessions.fp2.time)}
            </time>
          </div>
        </div>
        <div className={`${styles.session} ${styles.fp1}`}>
          <div className={styles.date}>
            <p className={styles.day}>{data.sessions.fp1.date.split('-')[2]}</p>
            <span className={styles.month}>
              {getMonth(data.sessions.fp1.date)}
            </span>
          </div>
          <div className={styles.typeContainer}>
            <p className={styles.type}>Practice 1</p>
            <time className={styles.time}>
              {getLocalTime(data.sessions.fp1.date, data.sessions.fp1.time)}
            </time>
          </div>
        </div>
        <div className={styles.track}>
          <p>Track</p>
          <h2>{`${data.track.slice(0, 1).toUpperCase()}${data.track.slice(
            1
          )}`}</h2>
          <div className={styles.trackContainer}>
            <Image
              src={trackImg?.image!}
              alt={trackImg?.name}
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextRace;
