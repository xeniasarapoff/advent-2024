import { readInputFile } from './inputReader';

export abstract class AdventOfCodeBase {
  protected input: string;

  constructor(inputFileName: string) {
    this.input = readInputFile(inputFileName);
  }

  abstract solvePart1(): number;
  abstract solvePart2(): number;

  protected parseInputByLine(): string[] {    
    return this.input.split(/\r?\n/);
  }
}