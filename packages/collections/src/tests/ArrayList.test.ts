import { describe, expect, test } from 'vitest';
import { ArrayList } from '../classes/ArrayList.js';

describe('ArrayList', () => {
  test('should be ArrayList initialization', () => {
    const list = new ArrayList<number>();
    expect(list).toBeInstanceOf(ArrayList);
  });

  test('should be ArrayList - size()', () => {
    const list = new ArrayList<number>();
    expect(list.size()).toBe(0);
  });

  test('should be ArrayList - add()', () => {
    let numberList = new ArrayList<number>();
    expect(numberList.size()).toBe(0);
    numberList.add(10);
    expect(numberList.size()).toBe(1);

    let stringList = new ArrayList<string>();
    expect(stringList.size()).toBe(0);
    stringList.add('Hello');
    stringList.add('Sai');
    expect(stringList.size()).toBe(2);
  });

  test('should be ArrayList - toArray()', () => {});
});
