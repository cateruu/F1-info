import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getCountry } from '../../utils/getCountry';
import styles from './Constructor.module.css';

type Props = {
  data: ConstructorsData;
};

type Constructor = {
  name: string;
  image: string;
};

const Constructor = ({ data }: Props) => {
  const [constructorImg, setConstructorImg] = useState<Constructor>();
  console.log(data.nationality);

  useEffect(() => {
    const fetchConstructor = async () => {
      const req = await fetch('/api/constructors');
      const res = await req.json();

      if (data.constructorId in res) {
        setConstructorImg(res[data.constructorId]);
      }
    };

    fetchConstructor().catch((err) => console.error(err));
  }, [data]);

  return (
    <div className={styles.container}>
      <Image
        src={`https://countryflagsapi.com/png/${getCountry(data.nationality)}`}
        alt={data.nationality}
        width={`${data.nationality === 'Swiss' ? 35 : 50}`}
        height={35}
        className={styles.flag}
      />
      <p className={styles.name}>{data.name}</p>
      <div className={styles.logoContainer}>
        {constructorImg && (
          <Image
            src={constructorImg?.image}
            alt={data.constructorId}
            layout='fill'
            className={styles.logo}
          />
        )}
      </div>
    </div>
  );
};

export default Constructor;
