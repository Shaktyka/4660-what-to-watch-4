// Создаёт новый объект и записывает в него 2 свойства
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

// Форматирует строку: заглавная буква + все остальные строчные
export const formatInitCap = (string = ``) => {
  return string.length > 0 ? `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}` : ``;
};

// Конвертирует количество минут в часы и минуты
export const getDurationFromMinutes = (minutes) => {
  const hours = Math.trunc(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

export const addZero = (number) => number < 10 ? `0${number}` : number;

export const formatTime = (time) => {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60) - (hours * 60);
  const seconds = time % 60;

  return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
};
