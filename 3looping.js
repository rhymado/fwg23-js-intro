// Looping => menjalankan perintah beberapa kali
// iterasi => perulangan
// iterator => angka perulangan, bilangan yang digunakan untuk mencacah
// bagian:
// 1. deklarasi iterator
// 2. kondisi perulangan
// 3. treatment iterator

// for loop
// for(deklarasi iterator;kondisi perulangan;treatment iterator){perintah yg berulang}
// treatment iterator selalu dijalankan di akhir iterasi
// kondisi perulangan selalu dicek di awal iterasi
// break => syntax yg digunakan untuk memberhentikan perulangan
// continue => syntax yg digunakan untuk melanjutkan ke iterasi selanjutnya

// print hello sebanyak n kali
const n = 5;
// for (let i = 1; i <= n; i = i + 1) {
//   console.log("hello");
// }
let isLoop = true;
// for (let i = 1; isLoop; i = i + 1) {
//   console.log("world");
//   if (i >= n) {
//     isLoop = false;
//   }
// }

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     continue;
//     // break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= n; i = i + 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
//   console.log(i);
// }

const s = 4;

// for (let i = 1; i <= s; i++) {
//   let row = "";
//   for (let j = 1; j <= s; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// buat baris selebar s
// let row = "";
// for (let j = 1; j <= s; j++) {
//   row += "*";
// }
// diulang sebanyak s
// for (let j = 1; j <= s; j++) {
//   console.log(row);
// }

// while loop
// while (kondisi perulangan){perintah yang diulang}
// deklarasi iterator
let it = 1;
// while
while (it <= n) {
  console.log("hello");
  it++;
}

// do while
// perbedaan alur dengan while dan for
// jalankan perintah dan perubahan iterator dulu, baru cek kondisi perulangan
// do {perintah yg diulang} while (kondisi perulangan)
it = 1;
do {
  console.log("hello");
  it++;
} while (it <= n);
// do while minimal dijalankan 1 kali