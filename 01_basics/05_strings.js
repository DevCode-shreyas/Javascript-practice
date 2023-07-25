const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // template string or template literal or template expression

const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // remove white spaces

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-")); // replace only first occurence

console.log(url.includes("sundar")); // true or false

console.log(gameName.split("-")); // split string into array

// write all string methods

// 1. charAt()
// 2. indexOf()
// 3. substring()
// 4. slice()
// 5. trim()
// 6. replace()
// 7. includes()
// 8. split()

// advanced string methods

// 1. startsWith()
// 2. endsWith()
// 3. repeat()
