import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import PositionLoader from '../Loaders/PositionLoader/PositionLoader';
import styles from './Position.module.css';

type Props = {
  data: ResultType;
};

type Fetch = {
  name: string;
  image: string;
};

const Position = ({ data }: Props) => {
  const [driverImg, setDriverImg] = useState<Fetch>();
  const [constructorImg, setConstructorImg] = useState<Fetch>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDriver = async () => {
      setLoading(true);
      const req = await fetch('/api/drivers');
      const res = await req.json();

      if (data.Driver.driverId in res) {
        setDriverImg(res[data.Driver.driverId]);
      }
    };

    const fetchConstructor = async () => {
      setLoading(true);
      const req = await fetch('/api/constructors');
      const res = await req.json();

      if (data.Constructor.constructorId in res) {
        setConstructorImg(res[data.Constructor.constructorId]);
      }
    };

    fetchDriver().catch((err) => console.error(err));
    fetchConstructor().catch((err) => console.error(err));
    setLoading(false);
  }, [data]);

  let style;
  if (data.position === '1') {
    style = {
      color: '#E3F380',
    };
  } else if (data.position === '2') {
    style = {
      color: '#C0C0C0',
      marginTop: '25px',
    };
  } else if (data.position === '3') {
    style = {
      color: '#674739',
      marginTop: '50px',
    };
  }

  return (
    <>
      {loading && <PositionLoader />}
      {!loading && (
        <div className={styles.place} style={style}>
          <div className={styles.images}>
            {driverImg && (
              <Image
                src={driverImg?.image}
                alt={data.Driver.driverId}
                width={206}
                height={206}
                style={{ zIndex: '10' }}
              />
            )}
            {constructorImg && (
              <div className={styles.constructorImgContainer}>
                <Image
                  src={constructorImg?.image}
                  alt={data.Driver.driverId}
                  layout='fill'
                  className={styles.constructorImg}
                />
              </div>
            )}
          </div>
          <div className={styles.info}>
            <h2 className={styles.position}>{data.position}</h2>
            <p className={styles.name}>
              {data.Driver.givenName} {data.Driver.familyName}
            </p>
            <div className={styles.points}>
              <span>Points:</span>
              <span
                className={`${data.FastestLap?.rank === '1' && styles.fastest}`}
              >
                {data.points}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Position;
