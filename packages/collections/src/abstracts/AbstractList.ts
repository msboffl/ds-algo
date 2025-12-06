import { List } from '../interfaces/List';
import { AbstractCollection } from './AbstractCollection';

export abstract class AbstractList<T>
  extends AbstractCollection<T>
  implements List<T>
{
  protected constructor() {
    super();
  }
}
