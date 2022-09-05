export const getTimeToRace = (time: number) => {
  let seconds = `${Math.floor((time / 1000) % 60)}`;
  let minutes = `${Math.floor((time / (60 * 1000)) % 60)}`;
  let hours = `${Math.floor(time / (60 * 60 * 1000))}`;

  if (+seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (+minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (+hours < 10) {
    hours = `0${hours}`;
  }

  return `${hours}:${minutes}:${seconds}`;
};
