export const getLocalTime = (date: string, time: string) => {
  const utcDate = date.concat('T', time);

  const newDate = new Date(utcDate);
  const localDate = newDate.toLocaleString();

  return localDate.split(',')[1].slice(0, 6);
};
