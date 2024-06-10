// In this lecture we have learnt how to explicitly define the this keyword
// and how to manipulate it.

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //              book = function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(236, "Farwa Sheikh");
lufthansa.book(235, "Tasleem Ahmad");
console.log(lufthansa);

//now lets say after some years the lufthansa booked a new airline
const PIA = {
  airline: "PIA",
  iataCode: "PI",
  bookings: [],
};

//Call() Method
const book = lufthansa.book;
// book(234, "tim");
//above example does not work

//                      call() apply() and bind() methods
book.call(PIA, 23, "sarah williams");
console.log(PIA);
//this way the call method will call the book function which will be pointing to PIA
book.call(lufthansa, 239, "Itachi");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 231, "Farwa SHeikh");
//console.log(swiss);

//Apply Method
//does exactly same as call but it does not recieves a list of
//arguments instead its gonna take an array of argumrnts
const flightData = [598, "Farwa"];
book.apply(swiss, flightData);
console.log(swiss);
//apply meethod is not used i modern Js becoz we have a better method
book.call(swiss, ...flightData);
//modern Js demnads to use the call method and always use the spread operator

//there is another method that allows us to do the same thing but that bethid is actualy way more important that these two

//                        ================== BIND METHOD =================
// diffrence is that bind does not imidiately call the fiunctions istead
// it returns a new functions where the this keyword is bound to wahtever value we have passed
// book.call(PIA, 23, "sarah williams");
// now we do the same thing using the bind method
const bookPIA = book.bind(PIA);
// now this will not call the PIA functions instead it will return a new function where this keyword will always be set to PIA
// now lets use the above function
bookPIA(266, "farwa ");
// as we have seen in console that this function works normally because it already has a this keyword set
// now we can do the same for all the airlines
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookLH(111, "Tasleem");
bookLX(333, "Ahmad");

// we can take this even further like in call methid we can pass multiple args
// similarly we can pass multiple args in bind method

// e.g we can create a function for a one specific flight in a specific airline

const bookPIA23 = book.bind(PIA, 23);
bookPIA23("Tasleem");
// taking this even further we can also specify the name but then it would always book a flight for
// 23 of PIA of that specific person

//other situations in which we can use the bind method
// 1. when we use objects together with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

//addEventListener is a higher order function here which receives a callback functions
document
  .querySelector(".buy-plane")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
//this keyword always points to that element to what that handler is attached

// 2. partial Application
// partial application means that we can preset parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
// now lets say that there is one tax that we use all the time

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
