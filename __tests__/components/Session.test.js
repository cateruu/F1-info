import { render, screen } from '@testing-library/react';
import Session from '../../components/Schedule/NextRace/Session';

describe('Session in NextRace', () => {
  let props;
  beforeEach(() => {
    props = {
      name: 'Race',
      date: '2022-10-28',
      time: '18:00:00Z',
    };
  });

  it('render correct session name', () => {
    render(<Session {...props} />);

    const sessionName = screen.getByText('Race');

    expect(sessionName).toBeVisible();
  });
});
