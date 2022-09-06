import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  [key: string]: {
    name: string;
    image: string;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    americas: {
      name: 'americas',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Famericas.png?alt=media&token=8357a1b3-84fe-4eca-a523-b42fb2cd2090',
    },
    albert_park: {
      name: 'albert_park',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Falbert_park.png?alt=media&token=a7eec1c8-6e83-4c38-bb7d-33d4c6c4778e',
    },
    bahrain: {
      name: 'bahrain',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fbahrain.png?alt=media&token=542e605f-03a4-448d-95ce-15f7328f3a14',
    },
    baku: {
      name: 'Baku',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fbaku.png?alt=media&token=db0752ad-e392-429c-b8f6-9fe386ddf76e',
    },
    catalunya: {
      name: 'catalunya',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fcatalunya.png?alt=media&token=2e2d0629-c327-465d-a7df-bef2a1fb75e2',
    },
    interlagos: {
      name: 'interlagos',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Finterlagos.png?alt=media&token=8983a991-5dd6-435b-9674-0fff260df698',
    },
    hungaroring: {
      name: 'hungaroring',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fhungaroring.png?alt=media&token=930530b6-f4b2-401d-92a6-95c4dab105da',
    },
    villeneuve: {
      name: 'villeneuve',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fvilleneuve.png?alt=media&token=46682677-de2d-47e7-9f36-622cbc552c34',
    },
    imola: {
      name: 'Imola',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fimola.png?alt=media&token=442421e7-b11e-4d3d-b51e-8c8ac7e4a5ba',
    },
    jeddah: {
      name: 'Jeddah',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fjeddah.png?alt=media&token=aa02483c-6747-4435-8b4b-ab8b4cf74bad',
    },
    ricard: {
      name: 'ricard',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fricard.png?alt=media&token=74accc31-c19d-4a04-bac6-e44c2d00ba63',
    },
    rodriguez: {
      name: 'rodriguez',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Frodriguez.png?alt=media&token=ebe74d34-dc41-4a1b-8b17-638d8137f8a8',
    },
    miami: {
      name: 'miami',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fmiami.png?alt=media&token=1d003240-503d-45f2-acdf-8bc4bdd2525d',
    },
    monaco: {
      name: 'monaco',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fmonaco.png?alt=media&token=6bbc9a92-aedd-4ce3-a5fa-9ba5742f79c2',
    },
    monza: {
      name: 'monza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fmonza.png?alt=media&token=3cabde6b-e001-4d3e-9383-b547207c8647',
    },
    silverstone: {
      name: 'silverstone',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fsilverstone.png?alt=media&token=1cb92a76-8858-4762-b48d-146c61cacafd',
    },
    marina_bay: {
      name: 'marina_bay',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fmarina_bay.png?alt=media&token=77c07734-a62d-4981-914b-f50d0d652777',
    },
    spa: {
      name: 'spa',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fspa.png?alt=media&token=e4621fac-7df9-4ae6-87b5-ea3832399ed1',
    },
    red_bull_ring: {
      name: 'red_bull_ring',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fred_bull_ring.png?alt=media&token=effe4e4c-262d-42a5-b094-4b0a707d466b',
    },
    suzuka: {
      name: 'suzuka',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fsuzuka.png?alt=media&token=a49723d2-5cf4-4927-a6c4-91dbc5f77315',
    },
    yas_marina: {
      name: 'yas_marina',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fyas_marina.png?alt=media&token=8d56dc91-a3c0-41b8-9138-a4af551840cb',
    },
    zandvoort: {
      name: 'zandvoort',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Fzandvoort.png?alt=media&token=7424069c-845c-43b3-9f6d-2a4c19e369b4',
    },
  });
}
