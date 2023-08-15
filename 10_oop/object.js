// function multiplyBy5(num) {
//   return num * 5;
// }

// multiplyBy5.power = 2;
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

// this

function createUser(name, score) {
  this.name = name;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 10);
const tea = new createUser("tea", 20);

chai.printMe();
tea.printMe();
