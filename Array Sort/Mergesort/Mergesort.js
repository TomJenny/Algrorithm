// Best case : O(n log n)
// Worst case: O(n log n)
// Average case: O(n log n)
// Memory: o(n)

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  //choose middle of array
  const middle = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle, array.length));

  return Array.from({ length: left.length + right.length }, () => {
    if (!left.length) return right.shift();
    else if (!right.length) return left.shift();
    else return left[0] > right[0] ? right.shift() : left.shift();
  });
};

mergeSort([5, 1, 4, 2, 3]);
