export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

// Форматирует жанр: заглавная буква + все остальные строчные
export const formatGenre = (genreName = ``) => {
  return genreName.length > 0 ? `${genreName[0].toUpperCase()}${genreName.slice(1).toLowerCase()}` : ``;
};

// Конвертирует количество минут в часы и минуты
export const getDurationFromMinutes = (minutes) => {
  const hours = Math.trunc(minutes/60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};
