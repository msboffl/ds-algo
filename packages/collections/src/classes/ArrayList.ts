import { AbstractList } from '../abstracts/AbstractList.js';
import { Iterator } from '../interfaces/Iterator.js';

export class ArrayList<T> extends AbstractList<T> {
  private _data: Record<number, T> = {};
  private _size: number = 0;
  private _capacity: number = 10;

  /**
   * Constructor: initializes the ArrayList with optional initial capacity
   * @param initialCapacity The starting capacity of the list
   */
  constructor(initialCapacity: number = 10) {
    super(); // Call parent class constructor
    this._capacity = initialCapacity;
  }

  /**
   * Returns the number of elements in the list
   */
  size(): number {
    return this._size;
  }

  /**
   * Adds a new element to the end of the list
   * @param element The element to add
   */
  add(element: T): void {
    if (this._size >= this._capacity) {
      this._resize();
    }

    this._data[this._size] = element;
    this._size++;
  }

  /**
   * Returns an iterator for the list
   * The iterator allows traversing elements one by one
   */
  iterator(): Iterator<T> {
    return {
      // Returns true if there are more elements to iterate
      hasNext(): boolean {
        // TODO: Implement hasNext logic
        return false;
      },
      // Returns the next element in the iteration
      next(): T {
        // TODO: Implement next logic
        throw new Error('No such element');
      },
      // Removes the last element returned by next() from the list
      remove(): void {
        // TODO: Implement remove logic
      },
    };
  }

  toArray() {
    return this._data;
  }

  private _resize() {
    this._capacity = this._capacity * 2;
    const newData: Record<number, T> = {};
    for (let i = 0; i < this._size; i++) {
      newData[i] = this._data[i]!;
    }
    this._data = newData;
  }
}


