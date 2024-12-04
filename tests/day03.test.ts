import { Day03 } from '../src/day03';

describe('Day03', () => {

  const day03 = new Day03('day03/test.txt');

  it('should solve part 1 with the input file', () => {
    expect(day03.solvePart1()).toBe(161); 
  });

  it.skip('should solve part 2 with the input file', () => {
    expect(day03.solvePart2()).toBe(0);
  });
});