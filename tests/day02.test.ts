import { Day02 } from '../src/day02';

describe('Day02', () => {

  const day02 = new Day02('day02/test.txt');

  it('should solve part 1 with the input file', () => {
    expect(day02.solvePart1()).toBe(2); 
  });

  it('should solve part 2 with the input file', () => {
    expect(day02.solvePart2()).toBe(4);
  });

  describe('isSafe', () => {
    it('should return true for an ascending numeric array with a range of 1', () => {
        expect(day02.isSafe([1, 2, 3, 4], 1)).toBe(true);
    });

    it('should return true for an descending numeric array with a range of 1', () => {
        expect(day02.isSafe([4, 3, 2, 1], 1)).toBe(true);
    });

    it('should return true for an ascending numeric array with a range of 3', () => {
        expect(day02.isSafe([1, 4, 5, 7], 3)).toBe(true);
    });

    it('should return true for an descending numeric array with a range of 3', () => {
        expect(day02.isSafe([8, 5, 4, 1], 3)).toBe(true);
    });

    it('should return false for an unsorted array', () => {
        expect(day02.isSafe([3, 1, 4, 2], 1)).toBe(false);
    });

    it('should return false if two numbers follow each others', () => {
        expect(day02.isSafe([8, 6, 4, 4], 1)).toBe(false);
    });

    it('should return false if the first two numbers are the same and allowFirstError is true', () => {
      expect(day02.isSafe([71, 69, 70, 71, 72, 75], 3, true)).toBe(false);
  });
  });
});