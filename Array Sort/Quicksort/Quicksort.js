// Best case : O(n log n)
// Worst case: O(n^2)
// Average case: O(n log n)
// Memory: o(log n)

function quickSort(array) {
  const arr = [...array];
  const arrLength = arr.length;

  if (arrLength <= 2) {
    return arr;
  }

  //choose pivot of array
  const pivotIndex = Math.floor(arrLength / 2);
  const pivot = arr[pivotIndex];

  const [left, right] = arr.reduce(
    (accumulator, value, index) => {
      if (value < pivot || (value === pivot && index != pivotIndex)) {
        accumulator[0].push(value);
      } else if (value > pivot) {
        accumulator[1].push(value);
      }
      return accumulator;
    },

    [[], []]
  );

  return [...quickSort(left), pivot, ...quickSort(right)];
}
