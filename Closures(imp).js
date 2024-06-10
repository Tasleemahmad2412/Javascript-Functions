// CLOSURES this is important topic
// the function that we are about to create is going to create closure

//closure is not a feature that we explicitly use
// so we dont create closures manually like we create a new array or new function
// it simpy happens in certain situations we just need to recognize those situations
const secureBoooking = function () {
  // count will start at zero but we will be able to manipulate it
  // but it cant be manipulated from outside
  let passengerCount = 0;

  //this function will return a new funtion
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBoooking();

// here the return function can access the passengerCount variable even though it no longer
// exists in execution stack, why is this happening ? Closure

booker();
booker();
booker();

// => the booker function exists in global environment
// => we can say that a closure makes a function remember all the avriables that existed when
// the function was created or at the functions birthplace
// ========================================================
// const secureBoooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// ========================================================
// in our above example as we can see the return function remembers everything at its birthplace

// any function has access to all the variables in scope of it was created

// ACCESSING THE VARIABLES THAT ARE NOT THE PART OF THE CURRENT FUNCTION BUT WERE PRESENT IN THE SCOPE
// WHEN IT WAS CREATED SO THAT ACCESSING OF THOSE VARIABLES IS CALLED CLOSURE IN THIS CAES:
// booker => (accessing the) passenger count

// [A function has access to the variable environment VE of execution context in which its was created]
// [Closure: VE attached to the function, exactly as it was at the time and place the function was created ]

// Thanks to closures a function does not loose any connections to variables that existed at the birthplace
// Closure has the priority over scope chain (Js first look for the variable in Closure if not found than its looked in scope chain)

// its like the person never losses the memories of his/her hometown
// some people think of this analogy as a bagpack as the fucntion where ever it does it carries everything in its bagpack
// bagpack contains all the variables that were created at the time of birth

// We donot have to create closures manually !!!
// JAvascript does it automaticallly

console.dir(booker);
