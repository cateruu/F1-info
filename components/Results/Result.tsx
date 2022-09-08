import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Result.module.css';

type Props = {
  result: ResultType;
};

type Constructor = {
  name: string;
  image: string;
};

const Result = ({ result }: Props) => {
  const [constructorImg, setConstructorImg] = useState<Constructor>();

  useEffect(() => {
    const fetchConstructor = async () => {
      const req = await fetch('/api/constructors');
      const res = await req.json();

      if (result.Constructor.constructorId in res) {
        setConstructorImg(res[result.Constructor.constructorId]);
      }
    };

    fetchConstructor().catch((err) => console.error(err));
  }, [result]);

  return (
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
          result.FastestLap.rank === '1' && styles.fastest
        }`}
      >
        {result.points}
      </p>
    </div>
  );
};

export default Result;
