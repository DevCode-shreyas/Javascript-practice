// object litral

// const user = {
//   name: "John",
//   age: 30,
// };

// console.log(user.name);

function User(name, loginCount) {
  this.name = name;
  this.loginCount = loginCount;

  return this;
}

const user1 = new User("John", 3);

console.log(user1);
