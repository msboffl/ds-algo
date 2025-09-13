import { AbstractList } from '../abstracts/AbstractList.js';
import { Iterator } from '../interfaces/Iterator.js';

export class ArrayList<T> extends AbstractList<T> {
  iterator(): Iterator<T> {
    return {
      hasNext(): boolean {
        // TODO: Implement hasNext logic
        return false;
      },
      next(): T {
        // TODO: Implement next logic
        throw new Error('No such element');
      },
      remove(): void {
        // TODO: Implement remove logic
      },
    };
  }
}
