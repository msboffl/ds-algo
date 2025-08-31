import { Iterator } from './Iterator.js';

export interface Iterable<T> {
  iterator(): Iterator<T>;
}
