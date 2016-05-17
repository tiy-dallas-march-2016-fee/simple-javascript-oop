'use strict';

function Car(make, model) {
  this.make = make;
  this.model = model;
  this.passengers = [];
}

Car.prototype = {
  honk: function() {
    return "beep beep";
  },
  addPassenger: function(passenger) {
    this.passengers.push(passenger);
  },
  description: function() {
    return "This is a " +  this.make + " " + this.model;
  },
  passengerList: function() {
    if (this.passengers.length === 0) {
      return "no passengers";
    }
    else if (this.passengers.length === 1) {
      return this.passengers[0];
    }
    else {
    this.passenger.forEach(function(passenger){
      console.log(passenger);
    });
   }
  }
}
