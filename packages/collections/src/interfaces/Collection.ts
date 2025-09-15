import { Iterable } from './Iterable.js';

export interface Collection<T> extends Iterable<T> {
  add(element: T): void;
  size(): number;
}
