import { merge } from '../src/merge';
// Given collection 1 and 2 are sorted in ascending order, and collection 3 is sorted in descending order.

// Test best path
test('merges sorted arrays correctly', () => {
  expect(merge([1, 3, 5], [6, 4, 2], [7, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
});

// Test if have empty arrays
test('works with empty arrays', () => {
  expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
});

// Test all empty arrays
test('merges when all inputs are empty', () => {
  expect(merge([], [], [])).toEqual([]);
});

// Test one element in each array 
test('merges single element arrays', () => {
  expect(merge([2], [1], [3])).toEqual([1, 2, 3]);
});

// Test arrays with duplicate numbers
test('merges arrays with duplicate numbers', () => {
  expect(merge([1, 2, 2], [3, 2], [3, 3, 4])).toEqual([1, 2, 2, 2, 3, 3, 3, 4]);
});

// Test arrays with negative numbers
test('merges arrays with negative numbers', () => {
  expect(merge([-3, -1], [0, -2], [-4, 1])).toEqual([-4, -3, -2, -1, 0, 1]);
});

// Test arrays with all elements the same
test('merges arrays with all elements the same', () => {
  expect(merge([1, 1], [1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
});

// Test arrays with different lengths
test('merges arrays with different lengths', () => {
  expect(merge([1, 4, 5, 8], [3, 2], [6, 7, 9, 10, 11])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
