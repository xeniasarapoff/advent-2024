export class ArrayUtils {
    /**
     * Sorts a numeric array in ascending order.
     * @param array - The array to be sorted.
     * @returns A new array sorted in ascending order.
     */
    static sortAscending(array: number[]): number[] {
      return [...array].sort((a, b) => a - b); // Create a new sorted array
    }
  
    /**
     * Sorts a numeric array in descending order.
     * @param array - The array to be sorted.
     * @returns A new array sorted in descending order.
     */
    static sortDescending(array: number[]): number[] {
      return [...array].sort((a, b) => b - a); // Create a new sorted array
    }

    /**
   * Counts how many times a specific value appears in an array.
   * @param array - The array to search.
   * @param target - The value to count.
   * @returns The number of occurrences of the target value.
   */
  static countOccurrences(array: number[], target: number): number {
    return array.reduce((count, num) => (num === target ? count + 1 : count), 0);
  }
  }