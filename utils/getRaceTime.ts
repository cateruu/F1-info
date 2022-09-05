export const getRaceTime = (date: string, time: string) => {
  const utcDate = date.concat('T', time);
  const raceTime = new Date(utcDate).getTime();

  return raceTime;
};
