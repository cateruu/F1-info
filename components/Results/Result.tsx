import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ResultLoader from '../Loaders/ResultLoader/ResultLoader';
import styles from './Result.module.css';

type Props = {
  result: ResultType;
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
};

type Constructor = {
  name: string;
  image: string;
};

const Result = ({ result, setLoading, loading }: Props) => {
  const [constructorImg, setConstructorImg] = useState<Constructor>();

  useEffect(() => {
    const fetchConstructor = async () => {
      setLoading(true);
      const req = await fetch('/api/constructors');
      const res = await req.json();

      if (result.Constructor.constructorId in res) {
        setConstructorImg(res[result.Constructor.constructorId]);
      }

      setLoading(false);
    };

    fetchConstructor().catch((err) => console.error(err));
  }, [result, setLoading]);

  return (
    <>
      {loading && <ResultLoader />}
      {!loading && (
        <div className={styles.result}>
          <p className={styles.position}>{result.position}</p>
          <p className={styles.driver}>
            {result.Driver.givenName} {result.Driver.familyName}
          </p>
          {constructorImg && (
            <div className={styles.imageContainer}>
              <Image
                src={constructorImg?.image}
                alt={constructorImg.name}
                layout='fill'
                className={styles.image}
              />
            </div>
          )}
          <p
            className={`${styles.points} ${
              result.FastestLap?.rank === '1' && styles.fastest
            }`}
          >
            {result.points}
          </p>
        </div>
      )}
    </>
  );
};

export default Result;
