import { Collection } from '../interfaces/Collection.js';
export abstract class AbstractCollection<T> implements Collection<T> {
  protected constructor() {}

  // Query Operations
  public abstract size(): number;
  public isEmpty(): boolean {
    return this.size() === 0;
  }
}
