// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6);
// myArr.push(7)
// myArr.pop();

// myArr.unshift(9); // add at start
// myArr.shift() // remove from start

// console.log(myArr.includes(9)); // check if element is present in array
// console.log(myArr.indexOf(3)); // return index of element

// const newArr = myArr.join(); // join array elements to string with comma

// console.log(myArr);
// console.log(newArr);

// slice, splice

// slice - copy of array elements from start to end index

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

// splice - remove elements from array and return removed elements

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
