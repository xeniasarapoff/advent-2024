import { AdventOfCodeBase } from './adventOfCodeBase';
import { ArrayUtils } from './arrayUtils';

export class Day03 extends AdventOfCodeBase {
  static regexLine = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
  static regexDigit = /mul\((\d+),(\d+)\)/;

  constructor(inputFileName: string) {
    super(inputFileName);
  }

  solvePart1(): number {
    const results: number[] = [];
    let match;

    while ((match = Day03.regexLine.exec(this.input)) !== null) {
      const matchResult = Day03.regexDigit.exec(match[0]);
      if (matchResult === null) break;
      const num1 = parseInt(matchResult[1], 10);
      const num2 = parseInt(matchResult[2], 10);
      results.push(num1 * num2); 
    }

    return ArrayUtils.sumArray(results);
  }

  solvePart2(): number {
    return 0;
  }

}