import { describe, expect, test } from 'vitest';
import { ArrayList } from '../classes/ArrayList';

describe('ArrayList', () => {
  test('should be empty when created', () => {
    const list = new ArrayList<number>();

    expect(list.size()).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });
});
