import {getRatingLevel} from './movie-overview.jsx';

// Тестируем интерпретации значения рейтинга
describe(`getRatingLevel function returns correct text values of number rating`, () => {

  it(`If rating value is missing function returns empty string`, () => {
    const value = undefined;
    const textRating = getRatingLevel(value);

    expect(textRating).toEqual(``);
  });

  it(`Rating value is less then min boundary`, () => {
    const value = 0.3;
    const textRating = getRatingLevel(value);

    expect(textRating).toEqual(`Bad`);
  });

  it(`Rating value is between boundaries`, () => {
    const value = 3.7;
    const textRating = getRatingLevel(value);

    expect(textRating).toEqual(`Normal`);
  });

  it(`Rating value equals one of boundary values`, () => {
    const value = 8;
    const textRating = getRatingLevel(value);

    expect(textRating).toEqual(`Good`);
  });

  it(`Rating value 10 equals 'Awesome'`, () => {
    const value = 10;
    const textRating = getRatingLevel(value);

    expect(textRating).toEqual(`Awesome`);
  });

  it(`Rating value is greater then max boundary`, () => {
    const value = 10.6;
    const textRating = getRatingLevel(value);

    expect(textRating).toEqual(`Awesome`);
  });

});
