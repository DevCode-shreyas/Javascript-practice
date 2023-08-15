class User {
  constructor(name) {
    this.name = name;
  }
  logMe() {
    console.log(this.name);
  }

  static createId() {
    return Math.round(Math.random() * 100);
  }
}

const shreyas = new User("Shreyas");

// console.log(shreyas.createId());

class Teacher extends User {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}

const shreyasb = new Teacher("Shreyas", "Maths");

shreyasb.logMe();
console.log(shreyasb.createId());
