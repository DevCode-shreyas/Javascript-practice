function setUserName(name) {
  this.name = name;
}

function createUser(name, email, password) {
  setUserName.call(this, name);
  this.email = email;
  this.password = password;
}

const chai = new createUser("Chai", "chai@gmail.com", "123");
console.log(chai);
