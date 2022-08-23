#!/usr/bin/node

function mergeSort(array) {
  const size = array.length;
  if (size === 1) return array;
  let left = mergeSort(array.slice(0, Math.floor(array.length / 2)));
  let right = mergeSort(array.slice(Math.floor(array.length / 2)));

  let newArray = [];
  let firstLeft = left.shift();
  let firstRight = right.shift();
  while (newArray.length < size) {
    if (firstLeft === undefined) {
      newArray = newArray.concat([firstRight, ...right]);
      continue;
    }

    if (firstRight === undefined) {
      newArray = newArray.concat([firstLeft, ...left]);
      continue
    }

    if (firstLeft <= firstRight) {
      newArray.push(firstLeft);
      firstLeft = left.shift();
    } else {
      newArray.push(firstRight);
      firstRight = right.shift();
    }
  }

  return newArray;
}

console.log(mergeSort([1, 2, 3]));
console.log(mergeSort([3, 2, 1]));
console.log(mergeSort([3, 2, 1]));
console.log(mergeSort([1, 3, 5, 2, 4]));
console.log(mergeSort([5, 4, 3, 2, 1]));
console.log(mergeSort([1, 1, 3, 1, 1]));
