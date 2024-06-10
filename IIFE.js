"use strict";
// Imediately Invoked Function Expressions (IIFE)
//Sosmetimes in Js we need a funnction that only executes
// once and never again (Basically its a function that disappears
// right after its called once)
//we will need this technique after when we will use async/await

// => Now how can we do that

const runOnce = function () {
  console.log("This will never run again !!!");
};

runOnce();
//however this can be run after this there is nothing stoping us
//thing we are trying to do is to execute a function imidiately
// without even having to save it
// we can do that by this
(function () {
  console.log("This will never run again");
})();
// () by using this we imidiately called it
// here we tricked Js into thinking that this is an expression not a fucntion

// (function () {
//   console.log("This will never run again");
// })();
// this example above is called imidiately invoked function expression
// IIFE
// this would also work for arrow function

(() => {
  console.log("This will ALSO never run again");
})();

//  Q: Why was this pattern actually invented ?
// well we alreaday know that function creates scopes
// variable declared with let/const create thir own scope
