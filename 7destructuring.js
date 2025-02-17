const foods = ["fried rice", "pasta", "beef wellington", "buffaloo chicken wings", "salad with peanut sauce"];

// const friedRice = foods[0];
// const pasta = foods[1];

// tipeVar []{} = array/obj
const [, , , bcw, ...sis] = foods;
// const { [0]: frice } = foods;
console.log(frice);
const [fr, ...sisa] = foods;
console.log(bcw, sis);
console.log(fr, sisa);
// destructuring pada array disesuaikan dengan urutan / indeks nya

const person = {
  name: "Alwi",
  //   lastName: "Ahmad",
  age: 17,
  isMarried: true,
  iq: 200,
};
// const personName = person.name;
// const personAge = person.age;
const { lastName = "-", age: umur, isMarried, ...rest } = person;
console.log(umur, isMarried, rest, lastName);
// if (!person.firstName) return
const firstName = person.firstName || "-";
