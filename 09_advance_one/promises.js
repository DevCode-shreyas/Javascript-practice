// const promiseOne = new Promise((resolve, reject) => {
//   // DB call, API call, File read,cryptography
//   setTimeout(() => {
//     console.log("Promise One is resolved");
//     resolve();
//   }, 2000);
// });

// promiseTwo.then(() => {
//   console.log("Promise One consumed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise Two is resolved");
//     resolve();
//   }, 2000);
// }).then(() => {
//   console.log("Promise Two consumed");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "Shreyas", email: "shreyasbole4@gmail.com" });
//   }, 2000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Shreyas", pass: "123" });
//     } else {
//       reject("Error occured");
//     }
//   }, 2000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finally is executed");
//   }); // finally is always executed irrespective of the result of promise

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ name: "javascript", pass: "123" });
//     } else {
//       reject("JS went wrong");
//     }
//   }, 2000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// consumePromiseFive();

// 'https://jsonplaceholder.typicode.com/usres'

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
