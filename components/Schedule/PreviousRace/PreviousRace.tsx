import Image from 'next/image';

import styles from './PreviousRace.module.css';

type Props = {
  data: PrevRaceType;
};

const PreviousRace = ({ data }: Props) => {
  return (
    <section className={styles.prev}>
      <header className={styles.header}>
        <span className={styles.name}>Previous Race: {data.name}</span>
        <Image
          src={`https://countryflagsapi.com/png/${data.country}`}
          alt={data.country}
          width={40}
          height={30}
          className={styles.flag}
        />
      </header>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.position}>Position</th>
            <th>Driver</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((driver) => {
            return (
              <tr key={driver.Driver.familyName} className={styles.row}>
                <td>{driver.position}</td>
                <td>
                  {driver.Driver.givenName} {driver.Driver.familyName}
                </td>
                <td>{driver.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default PreviousRace;
