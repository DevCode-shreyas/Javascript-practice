class User {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
  }

  get email() {
    // getter method to get the email in uppercase
    return this._email.toUpperCase();
  }
  set email(value) {
    // setter method to set the email in lowercase
    this._email = value;
  }

  get pass() {
    // getter method to get the password in uppercase
    return `${this._pass}shreyas`;
  }
  set pass(value) {
    // setter method to set the password in lowercase
    this._pass = value;
  }
}

const shreyas = new User("shreyas.ai", "abc");
console.log(shreyas.email);
