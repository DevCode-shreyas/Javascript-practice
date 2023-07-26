// for of loop

// for (const iterator of object) {

// }

// const arr =[1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello World";

// for (const greet of greeting) {
//     console.log(greet);
// }

// Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");

// console.log(map);

for (const [key, value] of map) {
//   console.log(key, value);
}

const myObj = {
  game1: "Cricket",
  game2: "Football",
  game3: "Hockey",
};


// for (const [key,value] of myObj) {
//     console.log(key,value);
// }
// object is not iterable