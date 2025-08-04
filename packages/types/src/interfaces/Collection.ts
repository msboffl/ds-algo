import { Iterable } from './Iterable.js';
export interface Collection<T> extends Iterable<T> {
  size(): number;
  isEmpty(): boolean;
  contains(item: T): boolean;
  add(item: T): boolean;
  remove(item: T): boolean;
  clear(): void;
}
