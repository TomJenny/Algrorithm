// Best case : O(n)
// Worst case: O(n^2)
// Average case: O(n^2)
// Memory: o(1)

const bubbleSort = (array) => {
  let swapped = false;

  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    swapped = false;

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[i]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
};

bubbleSort([5, 1, 4, 2, 3]);
