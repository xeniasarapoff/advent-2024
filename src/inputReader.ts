import * as fs from 'fs';
import * as path from 'path';

export function readInputFile(filename: string): string {
  const filePath = path.resolve(process.cwd(), 'inputs', filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Input file "${filename}" not found at ${filePath}`);
  }
  return fs.readFileSync(filePath, 'utf-8');
}