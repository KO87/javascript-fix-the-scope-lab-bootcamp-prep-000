var animal = 'dog';

function myAnimal() {
  console.log("cat");
  return animal
}

function yourAnimal() {
  var animal = `cat`
  console.log("cat");
  return animal
}

function add2(n) {
  const two = 2;
  return n + two
}

var funkyFunction = function() {
  return function() {
  return "FUNKY!";
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction ()
theFunk = "FUNKY!";
