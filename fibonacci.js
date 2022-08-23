#!/usr/bin/node

function fibs(n) {
  let arr = [0];
  for (let i = 1; i < n; i++) {
    arr.push((arr[i - 2] || 0) + (arr[i - 1] || 1));
  }
  return arr;
}

function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arr = fibsRec(n - 1);

  return arr.concat(arr[arr.length - 1] + arr[arr.length - 2]);
}
