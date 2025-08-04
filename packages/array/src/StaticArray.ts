import util from 'node:util';
import { Collection } from '@ds-algo/types';

export class DynamicList<T> implements Collection<T> {}
/**
 * A fixed-size static array implementation in TypeScript.
 * Does not support resizing or dynamic operations like push/pop.
 */
export class StaticArray<T> {
  private buffer: Record<number, T>;
  private capacity: number;

  constructor(size: number) {
    if (size <= 0) {
      throw new Error('Size must be greater than 0');
    }

    this.capacity = size;
    this.buffer = {} as Record<number, T>;
  }
  /**
   * Returns the fixed capacity of the array.
   */
  get length() {
    return this.capacity;
  }

  /**
   * Internal helper to validate bounds of Index.
   */
  private validateIndex(index: number): void {
    if (index < 0 || index >= this.capacity) {
      throw new RangeError(`Index ${index} is out of bounds `);
    }
  }

  /**
   * Sets the value at the specified index.
   * @param index - Index to assign
   * @param value - Value to store
   */
  set(index: number, value: T): void {
    this.validateIndex(index);
    this.buffer[index] = value;
  }

  /**
   * Gets the element at the specified index.
   * @param index - Index to access
   * @returns The element at the given index
   */
  get(index: number): T {
    this.validateIndex(index);
    if (!(index in this.buffer)) {
      throw new Error(`No value set at index ${index}`);
    }
    return this.buffer[index] as T;
  }

  // Node.js console.log support (util.inspect)
  [util.inspect.custom](): string {
    return this.toArrayString();
  }

  /**
   * Prints array in JS-native format using console.log()
   */
  private toArrayString(): string {
    let output = '[';
    for (let i = 0; i < this.capacity; i++) {
      if (i > 0) output += ', ';
      output += i in this.buffer ? `${this.buffer[i]}` : undefined;
    }
    output += ']';

    return output;
  }
}
