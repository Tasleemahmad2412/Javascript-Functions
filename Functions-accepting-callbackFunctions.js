//will replace all the spaces in a word
const oneWord = function (str) {
  str = str.replace(/ /g, "");
  //str.tolowerCase();
  return str;
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

//now we create a higher-order function (Function which takes in a function as an argument )
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  //here we used the methods used for functions to get the name of the functions that we used
  console.log(`Transformed by: ${fn.name}`);
};

//how will we actually call this function
transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

//we can also use callback functions in eventListeners
//and also like this:
// const high5 = function () {
//   console.log("👋");
// }[("jonas", "Martha", "Farwa")].forEach(high5);

//Js uses callbacks all the time
//makes it easy to structure our code into more useable and interconnected parts
//most impoertantly callback functions allow us to create abstraction
//like in above exapmles we created a levels of abstractions

//now lets do the opposote and create a function that will return a new function
//this is just to make a point easy
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
//greeterHey here is now a function essaentially its is this function
// return function (name) {
//   console.log(`${greeting} ${name}`);
// };
greeterHey("Farwa");
greeterHey("Tasleem");
//we can do above in one go
greet("Hey")("Farwa");

// const greeet = (greetings) => {
//   return (Name) => {
//     console.log(`${greetings} ${Name}`);
//   };
// };

// greeet("Hello")("Tasleem");
//easier way

const greetArr = (gretting) => (name) => console.log(`${gretting} ${name}`);
greetArr("Hello")("Tasleem");
