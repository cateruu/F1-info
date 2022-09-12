import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getCountry } from '../../utils/getCountry';
import styles from './Driver.module.css';

type Props = {
  data: DriverData;
};

type Fetch = {
  name: string;
  image: string;
};

const Driver = ({ data }: Props) => {
  const [driverImg, setDriverImg] = useState<Fetch>();

  useEffect(() => {
    const fetchDriver = async () => {
      const req = await fetch('/api/drivers');
      const res = await req.json();

      if (data.driverId in res) {
        setDriverImg(res[data.driverId]);
      } else {
        setDriverImg(res['unknown']);
      }
    };

    fetchDriver().catch((err) => console.error(err));
  }, [data]);

  return (
    <div className={styles.driver}>
      {driverImg && (
        <Image
          src={driverImg?.image}
          alt={data.driverId}
          width={206}
          height={206}
        />
      )}
      <div className={styles.info}>
        <Image
          src={`https://countryflagsapi.com/png/${getCountry(
            data.nationality
          )}`}
          alt={data.nationality}
          width={20}
          height={15}
          className={styles.flag}
        />
        <p className={styles.name}>
          {data.givenName} {data.familyName}
        </p>
      </div>
    </div>
  );
};

export default Driver;
