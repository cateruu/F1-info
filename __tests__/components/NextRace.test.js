import { render, screen, act } from '@testing-library/react';
import NextRace from '../../components/Schedule/NextRace/NextRace';

describe('NextRace', () => {
  let dataProp;

  beforeEach(() => {
    dataProp = {
      name: 'Mexico City Grand Prix',
      country: 'Mexico',
      track: 'Autódromo Hermanos Rodríguez',
      trackId: 'rodriguez',
      sessions: {
        fp1: {
          time: '18:00:00Z',
          date: '2022-10-28',
        },
        fp2: {
          time: '21:00:00Z',
          date: '2022-10-28',
        },
        fp3: {
          time: '17:00:00Z',
          date: '2022-10-29',
        },
        qualifying: {
          time: '20:00:00Z',
          date: '2022-10-29',
        },
        race: {
          time: '20:00:00Z',
          date: '2022-10-30',
        },
      },
    };

    fetch.resetMocks();
    fetch.mockResponse('{}');
  });

  it('render race name, track name and country flag', async () => {
    await act(async () => render(<NextRace data={dataProp} />));

    const gpName = screen.getByText('Mexico City Grand Prix');
    const trackName = screen.getByText('Autódromo Hermanos Rodríguez');
    const flag = screen.getByAltText('Mexico');

    expect(gpName).toBeVisible();
    expect(trackName).toBeVisible();
    expect(flag).toBeVisible();
  });

  it('render track image placeholder initially', () => {
    render(<NextRace data={dataProp} />);

    const placeholderImage = screen.getByTestId('track-loader');

    expect(placeholderImage).toBeVisible();
  });

  it('render track image after fetch', async () => {
    fetch.mockResponse(
      JSON.stringify({
        rodriguez: {
          name: 'rodriguez',
          image:
            'https://firebasestorage.googleapis.com/v0/b/f1-info-8b7b0.appspot.com/o/tracks%2Frodriguez.png?alt=media&token=ebe74d34-dc41-4a1b-8b17-638d8137f8a8',
        },
      })
    );
    render(<NextRace data={dataProp} />);

    const trackImg = await screen.findByAltText('Autódromo Hermanos Rodríguez');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(trackImg).toBeVisible();
  });
});
