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
    var self = this;
    if (this.passengers.length === 0) {
      return "no passengers";
    }
    else if (this.passengers.length === 1) {
      return this.passengers[0];
    }
    else if (this.passengers.length > 2) {
      var strOfPassengers = '';
      self.passengers.forEach(function(passenger, index) {
        if (index === self.passengers.length - 1) {
          strOfPassengers += 'and' + ' ' + passenger;
        }
        else {
          strOfPassengers += passenger + ',' + " ";
        }
      });
      return strOfPassengers;
     }
  }
}

function ChevyCar(){}
ChevyCar.prototype = new Car();
ChevyCar.prototype.breakDown = function(){}
ChevyCar.prototype.honk = function(){
  return "boop boop";
}
