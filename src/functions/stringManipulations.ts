export const formatNumberToNaira = (number: number) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(
    Number(number)
  );
};

export const getYoutubeLink = (videoId: string) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};

export const getMonthString = (date: Date) => {
  const monthStrings = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return monthStrings[new Date(date).getMonth()];
};

export const capitalize = (phrase: string) => {
  return phrase.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
};
