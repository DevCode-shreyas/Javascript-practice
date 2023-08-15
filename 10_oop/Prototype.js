// let myName = "shreyas     ";

// console.log(myName.trueLength);

let myHeros = ["superman", "batman", "spiderman", "ironman"];

let heroPower = {
  superman: "fly",
  batman: "money",
  spiderman: "web",
  ironman: "suit",

  getSpiderPower: function () {
    console.log(`spiderman has ${this.spiderman} power`);
  },
};

Object.prototype.shreyas = function () {
  console.log("shreyas is present in all objects");
};

Array.prototype.heyShreyas = function () {
  console.log("hey shreyas");
};

// heroPower.shreyas(); // error
// myHeros.shreyas();
// myHeros.heyShreyas();
// heroPower.heyShreyas(); // error

// TODO: inheritance

const User = {
  name: "shreyas",
  email: "abc@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//TODO: mordern way of inheritance

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "shreyasBole";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUserName.trueLength();
"shreyas".trueLength();
"shreyas     ".trueLength();
