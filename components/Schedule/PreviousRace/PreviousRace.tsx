import Image from 'next/image';
import Link from 'next/link';

import styles from './PreviousRace.module.css';
import Result from './Result';

type Props = {
  data: ResultDataType;
};

const PreviousRace = ({ data }: Props) => {
  return (
    <article className={styles.prev}>
      <header className={styles.header}>Previous Race</header>
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
      {data.results.map((result) => {
        return <Result key={result.Driver.familyName} result={result} />;
      })}
      <Link href='/results'>
        <button className={styles.results}>Full results</button>
      </Link>
    </article>
  );
};

export default PreviousRace;
