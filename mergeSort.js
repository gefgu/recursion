#!/usr/bin/node

function mergeSort(array) {
  const size = array.length;
  if (size === 1) return array;
  const left = mergeSort(array.slice(0, Math.floor(array.length / 2)));
  const rigth = mergeSort(array.slice(Math.floor(array.length / 2)));


  return array;
}

console.log(mergeSort([1, 2, 3]));
// console.log(mergeSort([3, 2, 1]));
// console.log(mergeSort([3, 2, 1]));
// console.log(mergeSort([1, 3, 5, 2, 4]));
// console.log(mergeSort([5, 4, 3, 2, 1]));
