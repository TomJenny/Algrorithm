// Best case : O(n)
// Worst case: O(n^2)
// Average case: O(n^2)
// Memory: o(1)

function insertionSort(arr) {
  var currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
insertionSort([5, 1, 4, 2, 3]);
