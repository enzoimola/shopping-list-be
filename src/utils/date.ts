import { FormatDateResult } from 'types/date';

export const getTodayFormattedDate = (): FormatDateResult => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const hour = today.getHours();
  const minutes = today.getMinutes();

  const formattedTime = `${hour}:${minutes < 10 ? '0' : ''}${minutes}`;

  const formattedDay = (day < 10) ? `0${day}` : day;
  const formattedMonth = (month < 10) ? `0${month}` : month;

  const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

  return {
    formattedDate,
    formattedTime,
  };
};
