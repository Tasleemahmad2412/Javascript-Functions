"use strict";
//------------------ DEDAULT PARAMETERS ------------------
//sometimes its usefull to have functions who have some parameters set as default
//so that we dont have to pass them manually if we dont intend to chnage them in future

//Booking function

const bookings = [];

const createBooking = function (
  filghtNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //this is the ES6 way above and offcourse we can override these values

  // numPassengers = numPassengers || 1;
  // price = price || 199;    ES5 way of doing it there is a better way in ES6

  const booking = {
    filghtNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 200);
createBooking("LH234", 5);
//inorder to use an expression we need to specify the parameter before using it in next one
//as a parameter like price = 199* numPassengers

// => another thing is that we cannot skip the arguments
//if we want to leave the second argument and set the last one than we can set the second to undefined
createBooking("LH345", undefined, 1000);
