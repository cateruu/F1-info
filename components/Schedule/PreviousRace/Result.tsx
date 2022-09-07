import styles from './Result.module.css';

type Props = {
  result: ResultType;
};

const Result = ({ result }: Props) => {
  return (
    <div className={styles.result}>
      <p className={styles.position}>{result.position}</p>
      <p className={styles.driver}>
        {result.Driver.givenName} {result.Driver.familyName}
      </p>
      <p className={styles.points}>{result.points}</p>
    </div>
  );
};

export default Result;
