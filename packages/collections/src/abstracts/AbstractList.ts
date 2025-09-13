import { Iterator } from '../interfaces/Iterator.js';
import { List } from '../interfaces/List.js';

export abstract class AbstractList<T> implements List<T> {
  abstract iterator(): Iterator<T>;
}
