// Method = fungsi sebagai value dalam object
this.color = "Red";
const Car = {
  brand: "Honda",
  color: "Black",
  model: "CRV",
  getCarBrandAndModel: function () {
    // getter method
    console.log("Brand = " + this.brand);
    console.log("Model = " + this.model);
  },
  getCarColor() {
    // getter method
    console.log("Color = " + this.color);
  },
  setCarColor: (newColor) => {
    // setter method
    if (typeof newColor !== "string") return;
    this.color = newColor;
  },
  setCarColorEx: function (newColor) {
    // setter method
    if (typeof newColor !== "string") return;
    this.color = newColor;
  },
};

// Car.getCarBrandAndModel();
// console.log(this.color);
// Car.setCarColor("Green");
// console.log(this.color);
// Car.setCarColorEx("Red");
// Car.getCarColor();

// Sort Method
// Digunakan untuk mengurutkan data array
// Array.sort
// Bersifat Mutasi
// Output berupa array asli

const arr = [2, 4, 1, 3, 10];
// console.log(arr);
// const result = arr.sort(); // diurutkan sbg karakter
const result = arr.sort((a, b) => {
  return b - a; // descending
  //   return a - b; // ascending
});
// console.log(arr);
// console.log(result);

// Method Reverse
// Digunakan untuk memutarbalikkan urutan array
// Array.reverse
// Bersifat Mutasi
// Output berupa array asli
arr.reverse();
// console.log(arr);

// Method Push
// Digunakan untuk menambahkan elemen array di posisi paling belakang
// Array.push
const newLength = arr.push(60, 70, 100);
// console.log(arr);
// console.log(newLength);

// Method Map
// Digunakan untuk melakukan perulangan pada array, menerapkan logika pada masing2 elemen array
// parameter: fungsi yang melakukan logika pada elemen2 array, akan mereturnkan elemen array baru
// map biasa digunakan untuk transformasi elemen array

const scores = [40, 65, 79, 88, 45, 70];

const grades = scores.map((el) => {
  switch (true) {
    case el >= 80 && el <= 100:
      return "A";
    case el >= 60 && el < 80:
      return "B";
    case el >= 40 && el < 60:
      return "C";
    case el >= 20 && el < 40:
      return "D";
    case el >= 0 && el < 20:
      return "E";
    default:
      return "Score out of bounds/range";
  }
});
// console.log(scores);
// console.log(grades);

// Method Split
// Digunakan untuk memisahkan elemen2 di dalam string sesuai dengan pemisah nya
// menghasilkan array
const str = "Fullstack Golang Offline";
const arrStr1 = str.split();
const arrStr2 = str.split("");
const arrStr3 = str.split(" ");
const arrStr4 = str.split("a", 2);
console.log(arrStr1);
console.log(arrStr2);
console.log(arrStr3);
console.log(arrStr4);

// Method Join
// Digunakan untuk menggabungkan elemen2 di dalam array sesuai dengan pemisahnya
// menghasilkan string
const strArr2 = arrStr2.join();
const strArr3 = arrStr3.join(" ");
const strArr4 = arrStr4.join("");
console.log(strArr2);
console.log(strArr3);
console.log(strArr4);
