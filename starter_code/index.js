'use strict';

const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator = new Elevator();
const person = new Person("Torgeir", 4, 9);


elevator.call(person.name, person.originFloor);
elevator._passengersEnter(person.name, person.originFloor);
elevator._passengersLeave(person.name, person.destinationFloor);
