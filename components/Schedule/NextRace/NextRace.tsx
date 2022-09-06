import Image from 'next/image';

import { getMonth } from '../../../utils/getMonth';
import { getLocalTime } from '../../../utils/getLocalTime';
import styles from './NextRace.module.css';
import { useEffect, useState } from 'react';

type Props = {
  data: NextRaceType;
};

type TrackImg = {
  name: string;
  image: string;
};

const NextRace = ({ data }: Props) => {
  const [trackImg, setTrackImg] = useState<TrackImg>();

  useEffect(() => {
    const fetchTrack = async () => {
      const req = await fetch('/api/tracks');
      const res = await req.json();

      if (data.trackId in res) {
        setTrackImg(res[data.trackId]);
      }
    };

    fetchTrack().catch((err) => console.error(err));
  }, [data]);

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
          <h2>{`${data.track}`}</h2>
          <a href={trackImg?.image} target='_blank' rel='noreferrer'>
            <div className={styles.imageContainer}>
              {trackImg?.image && (
                <Image
                  src={trackImg.image}
                  alt={data.track}
                  layout='fill'
                  className={styles.image}
                />
              )}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NextRace;
