// spread op
// menggunakan operator 3 titik (...)
// copy dan gabungkan array

const a = [1, 2, 3];
const b = [3, 4, 5];
const c = [...a, ...b];
// console.log(a);
// console.log(b);
// console.log(c);

// copy dan gabungkan obj
const p1 = {
  name: "Andi",
  age: 23,
  isMarried: false,
};
const p2 = {
  name: "Alwi",
  isMarried: true,
};
// ketika ada key/property yang sama, maka akan menggunakan value dari object yang di copy terakhir
const p3 = {
  ...p1,
  ...p2,
  age: 25,
};
console.log(p1);
console.log(p2);
console.log(p3);
