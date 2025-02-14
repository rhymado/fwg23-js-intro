// Format Deklarasi Variabel: Keyword namaVariabel
// Format Assignment nilai ke variabel: namaVariabel = nilaiVariabel
// Format Deklarasi + Assignment: Keyword namaVariabel = nilaiVariabel
// var, let, const
var namaDepan = "FGO";
let namaBelakang = "23";
const qty = 12;

// const SECRET_CODE = ""

// penulisan nama variabel menggunakan camelCase
// penulisan nama class menggunakan PascalCase

class Car {}
// const honda = new Car()

// function HeaderComponent(){}

var car = "Suzuki";
function printCar3() {
  console.log(car);
}
function printCar() {
  var car = "Honda";
  console.log(car);
}
function printCar2() {
  var car = "Civic";
  console.log(car);
}

// console.log(car);
// printCar3();
car = "Ferrari";
// console.log(car);
// printCar2();
// printCar();

let fruit = "Mango";
function printFruit() {
  //   let fruit = "Apple";
  console.log(fruit);
}
{
  let fruit = "Strawberry";
  //   console.log(fruit);
}
while (true) {
  let fruit = "Durian";
  //   console.log(fruit);
  break;
}
// console.log(fruit);
fruit = "Melon";
// console.log(fruit);
// printFruit();

// Hoisting

{
  //   var a = 1; // deklarasi + assignment
  //   console.log(a);
  //   var a; // deklarasi
  //   a = 1; // assignment
  //   console.log(a);
  var a;
  //   console.log(a);
  a = 1;
  //   console.log(b)
  let b = 1;
}

// greet();

// Tipe data Object
// Function
// berisikan sekumpulan perintah, bisa menerima input, bisa memberikan output
// input bisa berapapun, dimasukkan berdasarkan posisinya, didalam fungsi mendapatkan alias baru
// output harus 1
// return => memberikan keluaran, memberhentikan fungsi
// 1. deklarasi
// function namaFungsi(input){kumpulan perintah}
function greet() {
  console.log("Hello World");
}

// 2. ekspresi
// tipeVariabel namaVariabel = function (input) {kumpulan perintah}
const greetEx = function (firstName, lastName) {
  // jika ada input di fungsi, lengkapi dengan validasi
  // pengecekan tipedata primitif, menggunakan typeof
  // typeof namaVariabel
  // if (typeof firstName === "string" && typeof lastName === "string") {
  //   console.log("Hello World, " + firstName + " " + lastName);
  // }
  if (typeof firstName !== "string") return console.log("Tipe Data Input Harus Berupa String");
  if (typeof lastName !== "string") return console.log("Tipe Data Input Harus Berupa String");
  console.log("Hello World, " + firstName + " " + lastName);
};

greetEx(namaDepan, namaBelakang);
greetEx(true, namaDepan);

// 3. anak panah
// tipeVariabel namaVariabel = (input) => {kumpulan perintah}
const greetArrow = (name) => {
  if (typeof name === "string") {
    console.log("Hello World, " + name);
  }
};

// Array
// Tipe Data Collection (List dalam kategori yg sama)
// Index = urutan data, posisi data, start dari 0
// Value = nilai data
// data data di array berurutan
// mengambil data tunggal dari array => namaArray[index]
const hobbies = ["Membaca", "Menjahit", "Menyapu"];
// hobbies[1] => Menjahit
hobbies[2] = "Bermain Game";

// Object
// Tipe Data Collection (Mendeskripsikan sesuatu)
// Key = properti, identifier dari suatu data
// Value = nilai data
// data data di object tidak berurutan
// mengambil data tunggal dari object
// 1. namaObject.namaKey
// 2. namaObject["namaKey"]
const person = {
  firstName: "Andi",
  lastName: "Hutagalung",
  age: 25,
  hobbies: hobbies,
};
person.age = 30;
// console.log(person.firstName);
// console.log(person["firstName"]);
const prop = "firstName";
// console.log(person[prop]);

// instanceOf
// namaVariabel instaceOf tipeData/customType
// console.log(hobbies instanceof Object);
// console.log(hobbies instanceof Array);
// console.log(person instanceof Object);
// console.log(person instanceof Array);

const tgl = new Date();
const mbl = new Car();
// console.log(tgl instanceof Date);
// console.log(tgl instanceof Car);
// console.log(mbl instanceof Date);
// console.log(mbl instanceof Car);

const persons = [
  {
    firstName: "Andi",
    lastName: "Hutagalung",
    age: 25,
  },
  {
    firstName: "Budi",
    lastName: "Cahyono",
    age: 25,
  },
];
persons[1].firstName; // Budi
persons[1]["firstName"]; // Budi

person.hobbies[2]; // Bermain Game
person["hobbies"][2]; // Bermain Game
