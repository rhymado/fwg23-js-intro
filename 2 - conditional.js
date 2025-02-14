// if-else
/**
 * kondisi => operasi yg menghasilkan boolean
 * if (kondisi) {
 *  logika yg dijalankan jika kondisi bernilai true
 * } else {
 *  logika yg dijalankan jika kondisi bernilai false
 * }
 */

const nilai = 60;
const cond = nilai >= 75;
// if (cond) {
//   console.log("Lulus");
// } else {
//   console.log("Gagal");
// }

// ternary op
// kondisi ? logika jika true : logika jika false
// cond ? console.log("Lulus") : console.log("Gagal");
const statusKelulusan = cond ? "Lulus" : "Gagal";
// console.log(statusKelulusan);

// short circuit logic
// kondisi && logika jika true
// kondisi || logika jika false
const sk = cond || "Gagal";
// console.log(sk);

// switch-case
/**
 * switch (variabelPembanding) {
 *  case nilaiPembanding1:
 *    perintah logika;
 *    break;
 *  case nilaiPembanding2:
 *  .
 *  .
 *  .
 *  case nilaiPembandingN:
 *  default:
 * }
 */

const tempScale = "R"; // [C, R, F, K]
let tempConst;

switch (tempScale) {
  case "C":
    tempConst = 5;
    break;
  case "R":
    tempConst = 4;
    break;
  case "F":
    tempConst = 9;
    break;
  case "K":
    tempConst = 5;
    break;
  default:
    console.log("Skala temperatur tidak ditemukan");
}

// if (typeof tempConst === "number") console.log(tempConst);

/**
 * 80 - 100 A
 * 60 - 79  B
 * 40 - 59  C
 * 20 - 49  D
 * 0 - 19   E
 */

const score = 101;
let grade;
switch (true) {
  case score >= 80 && score <= 100:
    grade = "A";
    break;
  case score >= 60 && score < 80:
    grade = "B";
    break;
  case score >= 40 && score < 60:
    grade = "C";
    break;
  case score >= 20 && score < 40:
    grade = "D";
    break;
  case score >= 0 && score < 20:
    grade = "E";
    break;
  default:
    console.log("Score out of bounds/range");
}

if (typeof grade === "string") console.log(grade);
