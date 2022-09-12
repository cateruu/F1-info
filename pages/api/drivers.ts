import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  [key: string]: {
    name: string;
    image: string;
  };
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({
    albon: {
      name: 'Alexander Albon',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Falbon.png?alt=media&token=f1cf6dd8-6e23-46cc-a253-8a0ae8db8a35',
    },
    alonso: {
      name: 'Fernando Alonso',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Falonso.png?alt=media&token=47115162-ab9c-4a1d-ad12-d694b1e71758',
    },
    bottas: {
      name: 'Valtteri Bottas',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fbottas.png?alt=media&token=08a2e790-421a-4ae3-b171-11a5866e6ca7',
    },
    gasly: {
      name: 'Pierre Gasly	',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fgasly.png?alt=media&token=1fe4943b-a3cb-4ee1-bcc4-747d041c96c2',
    },
    hamilton: {
      name: 'Lewis Hamilton	',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fhamilton.png?alt=media&token=25419b7b-e23f-44b7-95d3-7428785cefaf',
    },
    hulkenberg: {
      name: 'Nico Hülkenberg',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fhulkenberg.png?alt=media&token=98d28b36-6843-4cba-9174-c37cb51f356c',
    },
    kevin_magnussen: {
      name: 'Kevin Magnussen',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fkevin_magnussen.png?alt=media&token=574ff64d-b318-476b-ab55-3cf56e96ee33',
    },
    latifi: {
      name: 'Nicholas Latifi',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Flatifi.png?alt=media&token=daafc831-5768-428e-9197-7f05f0440fa7',
    },
    leclerc: {
      name: 'Charles Leclerc',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fleclerc.png?alt=media&token=f405fa53-9a47-4b75-b5fb-f31bfd5c3efe',
    },
    max_verstappen: {
      name: 'Max Verstappen',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fmax_verstappen.png?alt=media&token=7a03be99-31fd-4f12-b10f-7be4992d53e4',
    },
    mick_schumacher: {
      name: 'Mick Schumacher',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fmick_schumacher.png?alt=media&token=76a85177-707f-4987-a92d-eb97cd7b9447',
    },
    norris: {
      name: 'Lando Norris',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fnorris.png?alt=media&token=b9e10947-4721-4c54-ac1d-41ae1f3726a0',
    },
    ocon: {
      name: 'Esteban Ocon',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Focon.png?alt=media&token=9656338b-5fe1-44d4-b265-75a4dc87b68e',
    },
    perez: {
      name: 'Sergio Pérez',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fperez.png?alt=media&token=d42dfb59-3ead-4459-8736-36a1c7f6c095',
    },
    ricciardo: {
      name: 'Daniel Ricciardo',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fricciardo.png?alt=media&token=5e153986-f2b9-46c9-8208-2dc5424c1fb0',
    },
    russell: {
      name: 'George Russell',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Frussel.png?alt=media&token=bb95de1c-bd1d-41bb-b6f8-44fd88a68156',
    },
    sainz: {
      name: 'Carlos Sainz',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fsainz.png?alt=media&token=251c604e-29b4-451e-b1d9-5c9bdb4c6d75',
    },
    stroll: {
      name: 'Lance Stroll',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fstroll.png?alt=media&token=a4e00ce3-a11a-4b6b-a749-e25ab0edff37',
    },
    tsunoda: {
      name: 'Yuki Tsunoda',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Ftsunoda.png?alt=media&token=928a88e9-8f14-4d21-b391-008ea3e7f847',
    },
    vettel: {
      name: 'Sebastian Vettel',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fvettel.png?alt=media&token=ff13dc40-e474-490f-a5c5-60fc81550ea9',
    },
    zhou: {
      name: 'Guanyu Zhou',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Fzhou.png?alt=media&token=86225081-8cdc-4607-883f-3876a70315f6',
    },
    unknown: {
      name: 'unknown',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/drivers%2Funknown.png?alt=media&token=beb716d6-d61d-48d6-b801-db4ed4398860',
    },
  });
};

export default handler;
