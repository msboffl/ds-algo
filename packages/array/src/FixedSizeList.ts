import { Collection, Iterator } from '@ds-algo/types';

export class FixedSizeList<T> implements Collection<T> {
  size(): number {
    return 0;
  }

  contains(item: T): boolean {
    return true;
  }

  isEmpty(): boolean {
    return false;
  }

  add(item: T): boolean {
    return false;
  }

  remove(item: T): boolean {
    return false;
  }

  clear(): void {}

  iterator(): Iterator<T> {
    let index = 0;
    return {
      hasNext(): boolean {
        return false;
      },
      next(): T {
        return null as unknown as T;
      },
    };
  }
}
