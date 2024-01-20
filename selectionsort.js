const array = [40, 15, 36, 27, 67, 19, 21, 81];

function selectionSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }
  return array;
}

const reuslt = selectionSort(array);
console.log(reuslt);
