const user = {
  name: "shreyas",
  price: 100,

  welcome: function () {
    console.log(`Welcome ${this.name}`);
  },

  // this reffer to the current context of the object
  // context means value of the object
};

// user.welcome()
// console.log(this);

// function chai(){
//     let username = 'shreyas';
//     console.log(this.username);
// }

// chai()

// this only work on object not on function

// const chai =function (){
//     let username = 'shreyas';
//     console.log(this.username);
// }

// chai() // undefined

// arrow function

// const chai = () => {
//     let username = 'shreyas';
//     console.log(this.username);
// }

// chai() // undefined

// pure arrow function

// basic syntax
// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(2,3));

// implicit return

// const add = (a, b) => a + b;  

// const add = (a, b) => (a + b);  

// console.log(add(2, 3));

// object return

// const add = (a, b) => ({username:'shreyas',age:20});
// console.log(add(2, 3));

