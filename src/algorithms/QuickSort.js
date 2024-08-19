function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function QuickSort(arr, start, end, steps) {
  if (start < end) {
    let pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
      if (arr[j] <= pivot) {
        swap(arr, i, j);
        steps.push({ array: arr.slice(), blue: [i, j], pivot: [end] });
        i++;
      }
    }
    swap(arr, i, end);
    steps.push({ array: arr.slice(), blue: [i, end] });
    QuickSort(arr, start, i - 1, steps);
    QuickSort(arr, i + 1, end, steps);
  }
}

function QuickSortWithSteps(arr, start, end) {
  const steps = [];
  QuickSort(arr, start, end, steps);
  return steps;
}

export default QuickSortWithSteps;
