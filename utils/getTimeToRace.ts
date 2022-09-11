import { getRaceTime } from './getRaceTime';

export const getTimeToRace = (date: string, time: string) => {
  const raceTime = getRaceTime(date, time);

  const currentTime = Date.now();
  const toRace = raceTime - currentTime;

  let seconds = `${Math.floor((toRace / 1000) % 60)}`;
  let minutes = `${Math.floor((toRace / (60 * 1000)) % 60)}`;
  let hours = `${Math.floor(toRace / (60 * 60 * 1000))}`;

  if (+seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (+minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (+hours < 10) {
    hours = `0${hours}`;
  }

  if (toRace <= 0) return 'Live';

  return `${hours}:${minutes}:${seconds}`;
};
