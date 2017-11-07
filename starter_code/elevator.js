'use strict';

class Elevator {
  constructor() {
    this.floor = 0;
    this.MINFLOOR = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.passenger = [];
    this.waitingList = [];
    this.direction = null;
    this._startInterval = null;

  }

  start() {
    this._startInterval = setInterval(() => {
      this.update();

    }, 1000);
  }

  stop() {
    clearInterval(this._startInterval);
  }

  update() {
    // floor stays the same
    this.floorUp();
    this.floorDown();
    console.log(this.floor, this.direction);


  }

  _passengersEnter(person, originFloor) {
    if (this.floor === originFloor) {
      ///////////////////////////
      this.passenger.push();


    }
    for (var ix; ix < this.waitingList.length; ix++) {
      if (person === this.waitingList[ix]) {
        this.waitingList.splice(ix, 1);
      }
    }
  }


  _passengersLeave(person, destinationFloor) {
    if (this.floor === destinationFloor) {
      ////////////////////////////
      this.passenger.pop();
    }

    for (var ex; ex < this.requests.length; ex++) {
      if (this.floor === this.requests[ex]) {
        this.requests.splice(ex, 1);
      }
    }
  }




  floorUp() {
    this.floor += 1;
    if (this.floor > this.MAXFLOOR) {

      this.floor = 10;
    }
    this.direction = "up";
  }

  floorDown() {
    this.floor -= 1;
    if (this.floor < this.MINFLOOR) {

      this.floor = 0;
    }
    this.direction = "down";
  }

  call(person, stopFloor) {
    this.waitingList.push(person);
    this.requests.push(stopFloor);
  }

  logEnter(person) {
    console.log(person + " has entered the elevator");

  }

  logLeave(person) {
    console.log(person + " has left the elevator");
  }
}



module.exports = Elevator;
