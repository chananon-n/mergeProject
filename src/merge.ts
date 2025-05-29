export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = []
  // convert c2 to ascending order
  const collection_2Sorted = [...collection_2].reverse()
  let i = 0,
    j = 0,
    k = 0
  while (
    i < collection_1.length ||
    j < collection_2Sorted.length ||
    k < collection_3.length
  ) {
    // Check have element in each collection
    const c1 = i < collection_1.length ? collection_1[i] : Infinity
    const c2 = j < collection_2Sorted.length ? collection_2Sorted[j] : Infinity
    const c3 = k < collection_3.length ? collection_3[k] : Infinity

    // Find the smallest element
    if (c1 <= c2 && c1 <= c3) {
      result.push(c1)
      i++
    } else if (c2 <= c1 && c2 <= c3) {
      result.push(c2)
      j++
    } else {
      result.push(c3)
      k++
    }
  }
  return result
}
