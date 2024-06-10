const flight = "Lh123";
const tasleem = {
  name: "Tasleem",
  passport: 92743493428374,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "lh999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 92743493428374) {
    alert("Check in");
  } else {
    alert("wrong passport number");
  }
};

// checkIn(flight, tasleem);
// console.log(flight);
// console.log(tasleem);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(tasleem);
checkIn(flight, tasleem);
console.log(tasleem.passport);

//javascript does not have passing by reference only passing by value
