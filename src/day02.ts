import { AdventOfCodeBase } from './adventOfCodeBase';
import { ArrayUtils } from './arrayUtils';

export class Day02 extends AdventOfCodeBase {
  safeCounter: number;

  constructor(inputFileName: string) {
    super(inputFileName);
    this.safeCounter = 0;
  }

  solvePart1(): number {
    this.splitRows();
    return this.safeCounter;
  }

  solvePart2(): number {
    return 0;
  }

  splitRows(): void {
    this.parseInputByLine().forEach((line) => {
      const lineArray = line.trim().split(/\s+/).map(Number);;
      if (this.isValidArray(lineArray)) this.safeCounter++;
    });
  }

  isValidArray(array: number[]): Boolean {
    for (let i = 0; i < array.length - 1; i++) {
      const diff = Math.abs(array[i + 1] - array[i]);
      if (diff < 1 || diff > 3) {
        return false
      }
    }
    return true;
  }
}