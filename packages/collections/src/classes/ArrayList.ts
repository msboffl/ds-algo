import { AbstractList } from '../abstracts/AbstractList';

export class ArrayList<T> extends AbstractList<T> {
  public constructor() {
    super();
  }

  public override size(): number {
    return 0;
  }

  public override isEmpty(): boolean {
    return this.size() === 0;
  }
}
