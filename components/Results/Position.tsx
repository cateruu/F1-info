import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const fetchDriver = async () => {
      const req = await fetch('/api/drivers');
      const res = await req.json();

      if (data.Driver.driverId in res) {
        setDriverImg(res[data.Driver.driverId]);
      }
    };

    const fetchConstructor = async () => {
      const req = await fetch('/api/constructors');
      const res = await req.json();

      if (data.Constructor.constructorId in res) {
        setConstructorImg(res[data.Constructor.constructorId]);
      }
    };

    fetchDriver().catch((err) => console.error(err));
    fetchConstructor().catch((err) => console.error(err));
  }, [data]);

  return <div className={styles.position}></div>;
};

export default Position;
