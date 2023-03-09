const { mean, split, turnStrToNumsArr, isLetter, median, mode } = require('./calculator-app-methods.js');

describe('Calculator App Methods Unit Test', () => {
    test('split() turns a string of numbers into an array of individual values.', () => {
        expect(split('1, 2, 3, 4')).toEqual(['1,', '2,', '3,', '4']);
        expect(split('10, 23, 30, 40')).toEqual(['10,', '23,', '30,', '40']);
        expect(split('10, 23, 30, 40')).toEqual(expect.any(Array));
    });

    test('turnStrToNumsArr() turns a string of numbers into an array of numbers and deletes string commas.', () => {
        expect(turnStrToNumsArr('1, 2, 3, 4')).toEqual([1, 2, 3, 4]);
        expect(turnStrToNumsArr('10, 23, 30, 40')).toEqual([10, 23, 30, 40]);
        expect(turnStrToNumsArr('10, 23, 30, 40')).toEqual(expect.any(Array));
    });

    test('mean() accepts a string of numbers and calculates the mean.', () => {
        expect(mean('4.5, 2.5, 6, 20, 4, 5.5, 13, -3.8, -15')).toEqual(4.077777777777778);
        expect(mean('4, 2, 6, 10, 4, 5, 1, 3.8, 15')).toEqual(5.644444444444444);
        expect(mean('4, 2, 6, 10, 4, 5, 1, 3.8, 15')).toEqual(expect.any(Number));
    });

    test('median() accepts a string of numbers and calculates the median.', () => {
        expect(median('2, 3, 5, 6, 7, 8, 9, 10')).toEqual(6.5);
        expect(median('2, 3, 5, 6, 7, 8, 9, 10, 11')).toEqual(7);
        expect(median('2, 3, 5, 6, 7, 8, 9, 10, 11')).toEqual(expect.any(Number));
        expect(median('2, 3, 5, 6, 7, 8, 9, 10')).toEqual(expect.any(Number));
    });

    test('mode() accepts a string of numbers and calculates the mode.', () => {
        expect(mode('2, 3, 4, 4, 8, 13, 3, 90, 18, 8, 9, 13, 7, 7')).toEqual([3, 4, 7, 8, 13]);
        expect(mode('2, 3, 0.5, 0.5, 3')).toEqual([0.5, 3]);
        expect(mode('-1, 3, 0.5, 4, 4, -1')).toEqual([-1, 4]);
        expect(mode('-1, 3, 0.5, 4, 4, -1')).toEqual(expect.any(Array));
    });

    test('isLetter() accepts a string and verifies only numbers exist.', () => {
        expect(isLetter('1, 2, 3')).toEqual(false);
        expect(isLetter('10, 34, 98, 0, 0-1, f')).toEqual(true);
        expect(isLetter('10, 34, 9d, 0, 0-1, 40')).toEqual(true);
        expect(isLetter('10, 34, 9d, 0, 0-1, 40')).toEqual(expect.any(Boolean));
    });
});
