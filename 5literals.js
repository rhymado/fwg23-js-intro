const num1 = 10;
const num2 = 4;

console.log(
  "Bilangan 1 = " +
    num1 +
    "\n" +
    "Bilangan 2 = " +
    num2 +
    "\n" +
    "Hasil penjumlahan bilangan 1 dan 2 = " +
    (num1 + num2)
);
console.log(
  `Bilangan 1 = ${num1}
Bilangan 2 = ${num2}
Hasil penjumlahan bilangan 1 dan 2 = ${penjumlahan(num1, num2)}`
);

function penjumlahan(a, b) {
  return a + b;
}
