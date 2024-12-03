import { AdventOfCodeBase } from './adventOfCodeBase';

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
    this.splitRows(true);
    return this.safeCounter;
  }

  splitRows(allowFirstError: boolean = false): void {
    this.parseInputByLine().forEach((line) => {
      const lineArray = line.trim().split(/\s+/).map(Number);
      if (this.isSafe(lineArray, 3, allowFirstError)) {
        this.safeCounter++;
      }
    });
  }

  isSafe<T>(
    arr: T[],
    maxRange: number,
    allowFirstError: boolean = false,
  ): boolean {
    let asc = true, desc = true;
    let skippedError = false;

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        const previous = arr[i - 1];

        const gap = Math.abs((current as any) - (previous as any));

        if (gap > maxRange) return false; 
        if (current === previous) return false 

        // Gap exceeds maxRange
        if (gap > maxRange || current === previous) {
          if (allowFirstError && !skippedError) {
            skippedError = true; // Skip the first error
            arr.splice(i, 1); // Remove the current item
            i--; // Adjust index due to array mutation
            continue;
          }
          return false; // Invalid if further errors occur
        }

        // Check sorting direction
        if (current > previous) desc = false;
        if (current < previous) asc = false;

         // If mixed direction and no more skips allowed, return false
        if (!asc && !desc) {
          if (allowFirstError && !skippedError) {
            skippedError = true; // Skip the first error
            arr.splice(i, 1); // Remove the current item
            i--; // Adjust index due to array mutation
            continue;
          }
          return false;
        }
    }

    return asc || desc;
  }
}