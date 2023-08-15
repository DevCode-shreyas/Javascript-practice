class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    // encrypt password
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.name.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUserName());
