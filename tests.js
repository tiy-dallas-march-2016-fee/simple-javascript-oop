
QUnit.test('Add a method called "honk" to Car so that all instances of that function will have it', function( assert ) {
  var car = new Car();
  assert.notEqual(car.honk, undefined, 'Should have a honk method.' );
});

QUnit.test('Have the "honk" method return the string "beep beep" when called.', function(assert) {
  var car = new Car();
  assert.equal(car.honk(), "beep beep", 'Should have beed beeped.')
});

QUnit.test('Change the Car constructor so that it takes two parameters, "make" and "model", and those values can be access through properties', function(assert) {
  var car = new Car('Toyota', 'Tacoma');
  assert.equal(car.make, 'Toyota', 'Expected a different value for "make".');
  assert.equal(car.model, 'Tacoma', 'Expected a different value for "model".');
});

QUnit.test('A car should have an array of passengers.', function(assert) {
  var car = new Car('Toyota', 'Tacoma');
  assert.notEqual(car.passengers, undefined, 'The car should have an array of passengers.');
});

QUnit.test('You should be able to add a passenger to the car.', function(assert) {
  var car = new Car('Toyota', 'Camry');
  car.addPassenger('Sue');
  assert.notEqual(car.addPassenger, undefined, 'The car does not have an "addPassenger" function.')
  assert.equal(car.passengers.length, 1);
});

QUnit.test('The car should have a function to get the description of the car in format "This is a {make} {model}."', function(assert) {
  var car = new Car('Toyota', 'Camry');
  assert.notEqual(car.description, undefined, 'The car does not have a "description" function.');
  assert.equal(car.description(), 'This is a Toyota Camry', 'The car did not adequately describe itself.');
});

QUnit.test('The card should have a function called "passengerList" for listing the passengers.', function(assert) {
  var car = new Car('Toyota', 'Tundra');
  assert.notEqual(car.passengerList, undefined, 'The card does not have a "passengerList" function.');
});

QUnit.test('If the car has no passengers, the "passengerList" function should return the string "no passengers".', function(assert) {
  var car = new Car('Toyota', 'Tundra');
  assert.equal(car.passengerList(), 'no passengers', 'The card does not have a "passengerList" function.');
});

QUnit.test('If the car has one passenger, the "passengerList" function should return the name of the passenger.', function(assert) {
  var car = new Car('Toyota', 'Tundra');
  car.addPassenger('Bob');
  assert.equal(car.passengerList(), 'Bob', 'The card does not have a "passengerList" function.');
});

//For this one, it might help to review the section entitled "This & That" in lesson https://online.theironyard.com/paths/158/units/1546/lessons/2796.
//REQUIREMENT: So in this function you are going to have to iterate through the array of passengers. You *must* use the `forEach` function on Array to do this.
QUnit.test('If the car has two or more passengers, the "passengerList" function should return the name of the passengers delimited with a space and a comma, and an "and" in right place for proper English.', function(assert) {
  var car = new Car('Toyota', 'Tundra');
  car.addPassenger('Bob');
  car.addPassenger('Sue');
  car.addPassenger('George');
  assert.equal(car.passengerList(), 'Bob, Sue, and George', 'The card does not have a "passengerList" function.');
});


QUnit.test('Make a new function called "ChevyCar" and have it inherit from `Car`.', function(assert) {
  var car = new ChevyCar();
  assert.notEqual(car.passengers, undefined, 'ChevyCar instances should have a passengers array.');
  assert.notEqual(car.honk, undefined, 'ChevyCar instances should have a honk function.');
});

QUnit.test('Add a function called "breakDown" to `ChevyCar` without adding it to `Car`.', function(assert) {
  var chevyCar = new ChevyCar();
  assert.notEqual(chevyCar.breakDown, undefined, 'ChevyCar instances should have a breakDown function.');

  var car = new Car();
  assert.equal(car.breakDown, undefined, 'Car instances should NOT have a breakDown function.');
});

QUnit.test('Override the "honk" function of ChevyCar so that it returns "boop boop" instead of "beep beep".', function(assert) {
  var car = new ChevyCar();
  assert.equal(car.honk(), "boop boop", 'Should have boop booped.')
});
