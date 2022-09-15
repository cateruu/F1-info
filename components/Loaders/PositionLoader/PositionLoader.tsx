import Image from 'next/image';
import styles from './PositionLoader.module.css';

const PositionLoader = () => {
  return (
    <div className={styles.loader}>
      <Image src='/unknown.png' alt='unknown' width={206} height={206} />
      <div className={styles.info}></div>
    </div>
  );
};

export default PositionLoader;
