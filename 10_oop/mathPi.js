const desc = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(desc);
// { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

const chai = {
  name: "Chai",
  price: 100,
  isAvailable: true,

  orderChai: function () {
    console.log("Ordering chai");
  },
};

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
