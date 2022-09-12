import { GetStaticProps } from 'next';
import Head from 'next/head';
import Constructor from '../components/Constructors/Constructor';

import styles from '../styles/Constructors.module.css';

type Props = {
  constructorsData: {
    result: ConstructorsData[];
  };
};

const ConstructorsPage = ({ constructorsData }: Props) => {
  return (
    <main className={styles.main}>
      <Head>
        <title>F1 Info - Constructors</title>
        <meta
          name='description'
          content='F1 Info portal for quckly accesible data about F1.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>Constructors</header>
      <section className={styles.constructors}>
        {constructorsData.result.map((constructor) => (
          <Constructor key={constructor.constructorId} data={constructor} />
        ))}
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const constructorsReq = await fetch(
    'https://ergast.com/api/f1/current/constructors.json'
  );

  let constructorsData;
  if (constructorsReq.ok) {
    const constructorsAPI: ConstructorsAPI = await constructorsReq.json();
    constructorsData = {
      result: constructorsAPI.MRData.ConstructorTable.Constructors,
    };
  }

  return {
    props: {
      constructorsData,
    },
  };
};

export default ConstructorsPage;
