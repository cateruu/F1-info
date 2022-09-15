import Image from 'next/image';

import { getLocalTime } from '../../../utils/getLocalTime';
import styles from './NextRace.module.css';
import { useEffect, useState } from 'react';
import Timer from '../Timer/Timer';
import Session from './Session';
import TrackLoader from '../../Loaders/TrackLoader/TrackLoader';

type Props = {
  data: NextRaceType;
};

type TrackImg = {
  name: string;
  image: string;
};

const NextRace = ({ data }: Props) => {
  const [trackImg, setTrackImg] = useState<TrackImg>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTrack = async () => {
      setLoading(true);
      const req = await fetch('/api/tracks');
      const res = await req.json();

      if (data.trackId in res) {
        setTrackImg(res[data.trackId]);
      }
      setLoading(false);
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
        <Session
          name='Qualifying'
          date={data.sessions.qualifying.date}
          time={data.sessions.qualifying.time}
        />
        <Session
          name='Practice 3'
          date={data.sessions.fp3.date}
          time={data.sessions.fp3.time}
        />
        <Session
          name='Practice 2'
          date={data.sessions.fp2.date}
          time={data.sessions.fp2.time}
        />
        <Session
          name='Practice 1'
          date={data.sessions.fp1.date}
          time={data.sessions.fp1.time}
        />
      </section>
      {loading && <TrackLoader />}
      {!loading && (
        <section className={styles.trackInfo}>
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
      )}
    </article>
  );
};

export default NextRace;
