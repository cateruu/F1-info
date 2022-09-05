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
    austin: {
      name: 'Austin',
      image: '/tracks/Austin.png',
    },
    australia: {
      name: 'Australia',
      image: '/tracks/Australia.png',
    },
    bahrain: {
      name: 'Bahrain',
      image: '/tracks/Bahrain.png',
    },
    baku: {
      name: 'Baku',
      image: '/tracks/Baku.png',
    },
    barcelona: {
      name: 'Barcelona',
      image: '/tracks/Barcelona.png',
    },
    brazil: {
      name: 'Brazil',
      image: '/tracks/Brazil.png',
    },
    budapest: {
      name: 'Budapest',
      image: '/tracks/Budapest.png',
    },
    banada: {
      name: 'Canada',
      image: '/tracks/Canada.png',
    },
    imola: {
      name: 'Imola',
      image: '/tracks/Imola.png',
    },
    jeddah: {
      name: 'Jeddah',
      image: '/tracks/Jeddah.png',
    },
    leCastellet: {
      name: 'Le Castellet',
      image: 'Le Castellet/tracks/.png',
    },
    mexico: {
      name: 'Mexico',
      image: '/tracks/Mexico.png',
    },
    miami: {
      name: 'Miami',
      image: '/tracks/Miami.png',
    },
    monaco: {
      name: 'Monaco',
      image: '/tracks/Monaco.png',
    },
    Monza: {
      name: 'Monza',
      image: '/tracks/Monza.png',
    },
    silverstone: {
      name: 'Silverstone',
      image: '/tracks/Silverstone.png',
    },
    singapore: {
      name: 'Singapore',
      image: '/tracks/Singapore.png',
    },
    spa: {
      name: 'Spa',
      image: '/tracks/Spa.png',
    },
    speilberf: {
      name: 'Speilberf',
      image: '/tracks/Speilberf.png',
    },
    suzuka: {
      name: 'Suzuka',
      image: '/tracks/Suzuka.png',
    },
    yasIsland: {
      name: 'Yas Island',
      image: '/tracks/Yas Island.png',
    },
  });
}
