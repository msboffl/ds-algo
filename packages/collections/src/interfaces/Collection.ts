import { Iterable } from './Iterable.js';
export interface Collection<T> extends Iterable<T> {
  size(): number;
  isEmpty(): boolean;
  contains(element: T): boolean;
  clear(): void;
  toArray(): T[];

  add(element: T): boolean;
  remove(element: T): boolean;

  containsAll(elements: Collection<T>): boolean;
  addAll(elements: Collection<T>): boolean;
  removeAll(elements: Collection<T>): boolean;
  retainAll(elements: Collection<T>): boolean;
}
