// if

// if(condition){
//     // do something
// }

// <  >  <=  >=  ==  ===  !=  !==

// if else

// if(condition){
//     // do something
// }else{
//     // do something
// }

// const score = 200;

// if(score > 100){
//     const power = 'super power';
//     console.log(`You have ${power}`);
// }

// const balance = 1000;

// if(balance >500) console.log('You have a lot of money'),console.log('You are rich');

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("more than 900");
// }


const userLoggedIn = true;
const debitCard = false;
const loggedInFromGoogle = false;
const loggedInFromFacebook = true;

// if(userLoggedIn && debitCard){
//     console.log('You can buy');
// }

if(loggedInFromGoogle || loggedInFromFacebook){
    console.log('You can login');
}