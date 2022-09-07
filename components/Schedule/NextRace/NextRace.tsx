import Image from 'next/image';

import { getMonth } from '../../../utils/getMonth';
import { getLocalTime } from '../../../utils/getLocalTime';
import styles from './NextRace.module.css';
import { useEffect, useState } from 'react';
import Timer from '../Timer/Timer';
import Session from './Session';

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
    <article className={styles.next}>
      <section className={styles.info}>
        <header className={styles.header}>
          Next Race{' '}
          <Timer
            date={data.sessions.race.date}
            time={data.sessions.race.time}
          />
        </header>
        <p className={styles.gp}>
          {data.name}{' '}
          <span className={styles.flag}>
            <Image
              src={`https://countryflagsapi.com/png/${data.country}`}
              alt={data.country}
              width={20}
              height={15}
            />
          </span>
        </p>
        <p className={styles.track}>{data.track}</p>
        <Session
          name='Race'
          date={data.sessions.race.date}
          time={data.sessions.race.time}
        />
      </section>
      <section>
        {trackImg && (
          <a
            href={trackImg.image}
            target='_blank'
            rel='noreferrer'
            className={styles.trackContainer}
          >
            <Image
              src={trackImg.image}
              alt={data.track}
              layout='fill'
              className={styles.trackImg}
            />
          </a>
        )}
      </section>
    </article>
  );
};

export default NextRace;
