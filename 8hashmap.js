// bagaimana menggunakan hashmap pada pengondisian
// 1. object
const colorTable = {
  red: "#ff0000",
  blue: "#0000ff",
  black: "#000000",
  white: "#ffffff",
};
const color = "blue";
let colorCode = "";
// switch (color) {
//   case "red":
//     colorCode = "#ff0000";
//     break;
//   case "blue":
//     colorCode = "#0000ff";
//     break;
//   case "black":
//     colorCode = "#000000";
//     break;
//   case "white":
//     colorCode = "#ffffff";
//     break;
//   default:
//     break;
// }

colorCode = colorTable[color];
// console.log(colorCode);

// 2. Map
const colorMap = new Map();

colorMap.set("red", "#ff0000");
colorMap.set("blue", "#0000ff");
colorMap.set("white", "#ffffff");
colorMap.set("black", "#000000");
// colorMap.set(
//   function a() {},
//   function b() {}
// );

colorCode = colorMap.get(color);
console.log(colorCode);
console.log(colorMap);
