export const formatNumberToNaira = (number: number) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(
    Number(number)
  );
};

export const getYoutubeLink = (videoId: string) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};
