import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  [key: string]: {
    image: string;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    austin: {
      image: '/tracks/Austin.png',
    },
    australia: {
      image: '/tracks/Australia.png',
    },
    bahrain: {
      image: '/tracks/Bahrain.png',
    },
    baku: {
      image: '/tracks/Baku.png',
    },
    barcelona: {
      image: '/tracks/Barcelona.png',
    },
    brazil: {
      image: '/tracks/Brazil.png',
    },
    budapest: {
      image: '/tracks/Budapest.png',
    },
    banada: {
      image: '/tracks/Canada.png',
    },
    imola: {
      image: '/tracks/Imola.png',
    },
    jeddah: {
      image: '/tracks/Jeddah.png',
    },
    leCastellet: {
      image: 'Le Castellet/tracks/.png',
    },
    mexico: {
      image: '/tracks/Mexico.png',
    },
    miami: {
      image: '/tracks/Miami.png',
    },
    monaco: {
      image: '/tracks/Monaco.png',
    },
    monza: {
      image: '/tracks/Monza.png',
    },
    silverstone: {
      image: '/tracks/Silverstone.png',
    },
    singapore: {
      image: '/tracks/Singapore.png',
    },
    spa: {
      image: '/tracks/Spa.png',
    },
    speilberf: {
      image: '/tracks/Speilberf.png',
    },
    suzuka: {
      image: '/tracks/Suzuka.png',
    },
    yasIsland: {
      image: '/tracks/Yas Island.png',
    },
  });
}
