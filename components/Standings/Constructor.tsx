import Image from 'next/image';
import { useEffect, useState } from 'react';
import ResultLoader from '../Loaders/ResultLoader/ResultLoader';
import styles from './Constructor.module.css';

type Props = {
  data: ConstructorType;
};

type Constructor = {
  name: string;
  image: string;
};

const Constructor = ({ data }: Props) => {
  const [constructorImg, setConstructorImg] = useState<Constructor>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchConstructor = async () => {
      setLoading(true);
      const req = await fetch('/api/constructors');
      const res = await req.json();

      if (data.Constructor.constructorId in res) {
        setConstructorImg(res[data.Constructor.constructorId]);
      }
      setLoading(false);
    };

    fetchConstructor().catch((err) => console.error(err));
  }, [data]);

  return (
    <>
      {loading && <ResultLoader />}
      {!loading && (
        <div className={styles.constructorContainer}>
          <p className={styles.position}>{data.position}</p>
          <p className={styles.name}>{data.Constructor.name}</p>
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
          <p className={styles.points}>{data.points}</p>
        </div>
      )}
    </>
  );
};

export default Constructor;
