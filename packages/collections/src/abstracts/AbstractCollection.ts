import { Collection } from '../interfaces/Collection.js';
export abstract class AbstractCollection<T> implements Collection<T> {
  abstract add(element: T): void;
  abstract size(): number;
}
