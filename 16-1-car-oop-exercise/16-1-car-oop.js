// PART 1 CREATE A VEHICLE CLASS
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'Beep.';
    };

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    };
}

// PART 2 CREATE A CAR CLASS
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

// PART 3 CREATE A MOTORCYCLE CLASS
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOM!!!';
    };
}

// PART 4 CREATE A GARAGE CLASS
class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    } 

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles allowed in here!';
        } 
        if (this.vehicles.length >= this.capacity) {
            return 'Sorry, we\'re full!';
        }

        this.vehicles.push(newVehicle);
        return 'Vehicle addded!';
    }
}