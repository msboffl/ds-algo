import { Collection } from '../interfaces/Collection.js';
import { Iterator } from '../interfaces/Iterator.js';

export abstract class AbstractCollection<T> implements Collection<T> {
  abstract iterator(): Iterator<T>;
  abstract add(element: T): void;
  abstract size(): number;
}
