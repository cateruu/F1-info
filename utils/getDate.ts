export const getMonth = (date: string) => {
  const month = date.split('-')[1];

  switch (month) {
    case '01':
      return 'Jan';
    case '02':
      return 'Feb';
    case '03':
      return 'Mar';
    case '04':
      return 'Apr';
    case '05':
      return 'May';
    case '06':
      return 'Jun';
    case '07':
      return 'Jul';
    case '08':
      return 'Aug';
    case '09':
      return 'Sep';
    case '10':
      return 'Oct';
    case '11':
      return 'Nov';
    case '12':
      return 'Dec';
  }
};

export const getLocalTime = (date: string, time: string) => {
  const utcDate = date.concat('T', time);

  const newDate = new Date(utcDate);
  const localDate = newDate.toLocaleString();

  return localDate.split(',')[1].slice(0, 6);
};
