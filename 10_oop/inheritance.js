class User {
  constructor(name) {
    this.name = name;
  }
  logMe() {
    console.log(`USERNAME IS ${this.name}`);
  }
}

class Teacher extends User {
  constructor(name, email, password) {
    super(name);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`course added successfully by ${this.name}`);
  }
}

const chai = new Teacher("chai", "chai@abc.com", "123456");

chai.logMe();
chai.addCourse();

const masalaChai = new User("masalaChai");
// masalaChai.addCourse(); // error
masalaChai.logMe();

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);
