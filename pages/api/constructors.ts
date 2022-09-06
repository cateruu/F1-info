import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  [key: string]: {
    name: string;
    image: string;
  };
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({
    alfa: {
      name: 'Alfa Romeo',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/constructors%2Falfa.png?alt=media&token=eac569f3-a2eb-4f53-9f20-d037f019d8d7',
    },
    alphatauri: {
      name: 'Alpha Tauri',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/constructors%2Falphatauri.png?alt=media&token=87bb3d51-50d2-4b6e-8e16-b319c85f9f65',
    },
    alpine: {
      name: 'Alpine',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/constructors%2Falpine.png?alt=media&token=fb3dcfd8-6f79-458a-b824-e92700ff7b1b',
    },
    aston_martin: {
      name: 'Aston Martin',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/constructors%2Faston_martin.png?alt=media&token=0e46e470-29b4-4bf1-b32b-d44226bfadd4',
    },
    ferrari: {
      name: 'Ferrari',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/constructors%2Fferrari.png?alt=media&token=af8643e1-ab6e-48a5-8207-e0c43f0acae3',
    },
    haas: {
      name: 'Haas',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/constructors%2Fhaas.png?alt=media&token=d6c20be5-01fd-43f0-8606-2d9228f85743',
    },
    mclaren: {
      name: 'Mclaren',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/constructors%2Fmclaren.png?alt=media&token=b5e3b809-0daa-4f82-8647-b9d6d83667bc',
    },
    mercedes: {
      name: 'Mercedes',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/constructors%2Fmercedes.png?alt=media&token=f7b3d151-a28a-49dc-8459-81edaf197829',
    },
    red_bull: {
      name: 'Red Bull',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/constructors%2Fred_bull.png?alt=media&token=27d50237-8e57-43e5-9a45-1e5f9291b06c',
    },
    williams: {
      name: 'Williams',
      image:
        'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/constructors%2Fwilliams.png?alt=media&token=1846a10c-47b7-43da-9b64-0889b5645992',
    },
  });
};

export default handler;
