import { AdventOfCodeBase } from '../src/adventOfCodeBase';

class MockAdventOfCode extends AdventOfCodeBase {
  public parseInputByLinePublic(): string[] {
    return this.parseInputByLine();
  }
  solvePart1(): number {
    return 0; // Not needed for this test
  }
  solvePart2(): number {
    return 0; // Not needed for this test
  }
}

describe('AdventOfCodeBase', () => {
  it('should parse input into lines', () => {
    const instance = new MockAdventOfCode('test.txt');
    expect(instance.parseInputByLinePublic()).toEqual(['line1', 'line2', 'line3']);
  });
});