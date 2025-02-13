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
if (cond) {
  console.log("Lulus");
} else {
  console.log("Gagal");
}

// ternary op
// kondisi ? logika jika true : logika jika false
// cond ? console.log("Lulus") : console.log("Gagal");
const statusKelulusan = cond ? "Lulus" : "Gagal";
console.log(statusKelulusan);

// short circuit logic
// kondisi && logika jika true
// kondisi || logika jika false
const sk = cond || "Gagal";
console.log(sk);
