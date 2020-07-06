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
