// Immediately Invoked Function Expression (IIFE)

// IIFE is a function that is executed right after it is created.

(function chai() {
    // named IIFF
  console.log("hello");
})(); // ; is required here

// ()() this is the syntax of IIFE

((name) => {
  console.log(`hello ${name}`);
})("shreyas");
