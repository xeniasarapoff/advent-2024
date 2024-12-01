import { Day01 } from '../src/day01';

describe('Day01', () => {

  const day01 = new Day01('day01/test.txt');

  it('should break the input columns into two sorted arrays', () => {
    expect(day01.column1).toEqual([3,4,2,1,3,3]);
    expect(day01.column2).toEqual([4,3,5,3,9,3]);

  });
  it('should solve part 1 with the input file', () => {
    expect(day01.solvePart1()).toBe(11); 
  });

  it('should solve part 2 with the input file', () => {
    expect(day01.solvePart2()).toBe(31);
  });
});