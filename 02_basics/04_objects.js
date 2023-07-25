// const tinderUser= new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "shreyas";
tinderUser.isLoggedin = false;

// console.log(tinderUser);

const regularUser = {
  email: "shreyas@gmail.com",
  fullname: {
    userfullname: {
      firstname: "shreyas",
      lastname: "bole",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "a", 5: "b", 6: "c" };

const obj3 = { ...obj1, ...obj2 }; //spread operator
// const obj3 = Object.assign({},obj1,obj2)  //assign method
// console.log(obj3);

const users = [
  {
    id: 1,
    name: "shreyas",
  },
];

// users[1].name
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.entries(tinderUser)[0][1]);
// console.log(tinderUser.hasOwnProperty("id"));

// object destructuring

const course = {
  coursename: "js",
  price: 1000,
  author: "shreyas",
};

// course.coursename

const { author: a } = course;  // a = course.author

// console.log(a);

// api



