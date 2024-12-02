import { Day02 } from '../src/day02';

describe('Day02', () => {

  const day02 = new Day02('day02/test.txt');

  it('should solve part 1 with the input file', () => {
    expect(day02.solvePart1()).toBe(2); 
  });

  it('should solve part 2 with the input file', () => {
    expect(day02.solvePart2()).toBe(0);
  });
});