import { merge } from '../src/merge';

test('merges sorted arrays correctly', () => {
  // collection_1, collection_3 ascending; collection_2 descending
  expect(merge([1, 3, 5], [6, 4, 2], [7, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
});

test('works with empty arrays', () => {
  expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
});

test('merges when all inputs are empty', () => {
  expect(merge([], [], [])).toEqual([]);
});

test('merges single element arrays', () => {
  expect(merge([2], [1], [3])).toEqual([1, 2, 3]);
});

test('merges arrays with duplicate numbers', () => {
  expect(merge([1, 2, 2], [3, 2], [3, 3, 4])).toEqual([1, 2, 2, 2, 3, 3, 3, 4]);
});

test('merges arrays with negative numbers', () => {
  expect(merge([-3, -1], [0, -2], [-4, 1])).toEqual([-4, -3, -2, -1, 0, 1]);
});

test('merges arrays with all elements the same', () => {
  expect(merge([1, 1], [1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
});

test('merges arrays with different lengths', () => {
  expect(merge([1, 4, 5, 8], [3, 2], [6, 7, 9, 10, 11])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
