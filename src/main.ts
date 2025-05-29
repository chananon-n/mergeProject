import { merge } from './merge'

const arr1 = [1, 3, 5] // ascending order
const arr2 = [6, 4, 2]  // descending order
const arr3 = [7, 9] // descending order

const merged = merge(arr1, arr2, arr3)
console.log('Merged array:', merged)
