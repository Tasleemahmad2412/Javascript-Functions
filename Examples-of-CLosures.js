// in these examples we are going to see that we dont need to return a function from another function inorder
// to create a closure

let f;

// f is not een define in the variable environemtn of a  function
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
// here g is executed so now g() no longer exists but f() still access the variables of g()
f();
console.dir(f);
// a value is inside the bagpack of the f() function
h();
// here f function is re-assigned
f();

// now lets inspect the variable environment
console.dir(f);

// EXAMPLE 2
// timer is another great example that we dont eed to return a function to see a closure

const boardPassengers = function (n, wait) {
  // Closure also includes arguments because they are really just local variables
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are boarding now all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};
//how closure has priority over a scope chain
const perGroup = 1000;
boardPassengers(180, 3);
