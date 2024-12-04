import { AdventOfCodeBase } from './adventOfCodeBase';
import { ArrayUtils } from './arrayUtils';

export class Day01 extends AdventOfCodeBase {
  column1: number[] = [];
  column2: number[] = [];

  constructor(inputFileName: string) {
    super(inputFileName);
    this.splitColumns();
  }

  solvePart1(): number {
    const sorted1 = ArrayUtils.sortAscending(this.column1);
    const sorted2 = ArrayUtils.sortAscending(this.column2);
    const arraySolution = sorted1.map((value, index) => {
      return Math.abs(value - sorted2[index]);
    });
    return ArrayUtils.sumArray(arraySolution); 
  }

  solvePart2(): number {
    const arraySolution = this.column1.map((value, _) => {
      const occ = ArrayUtils.countOccurrences(this.column2, value);
      return value * occ;
    });
    return ArrayUtils.sumArray(arraySolution);
  }

  splitColumns(): void {
    this.parseInputByLine().forEach((line) => {
      const [col1, col2] = line.trim().split(/\s+/);
      this.column1.push(Number(col1));
      this.column2.push(Number(col2));
    });
  }
}