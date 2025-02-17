const arr = [1, 2, 3];
const arr2 = [1, 2, 3, 4];
arr[3] = 4;
const arr3 = [...arr];
const arr4 = Array.from(arr);

console.log(arr);
console.log(arr4);
console.log(arr === arr4);

const a = 1;
let b = a;
b = 2;

console.log(a, b);
