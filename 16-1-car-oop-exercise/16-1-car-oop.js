// PART 1 CREATE A VEHICLE CLASS
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk () {
        return 'Beep.';
    }

    toString () {
        const { make, model, year } = this;
        return `The vehicle is a ${make} ${model} from ${year}`;
    }
}

// PART 2 CREATE A CAR CLASS
class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

// PART 3 CREATE A MOTORCYCLE CLASS
class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine () {
        return "VROOM!!!"
    }
}

// PART 4 CREATE A GARAGE CLASS
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add (vehicleInstance) {
        const { capacity, vehicles } = this;
        const vehLen = vehicles.length;
        const onlyVehcMsg = "Only vehicles are allowed in here!";
        const isVehicleInst = vehicleInstance instanceof Vehicle;
        if (!isVehicleInst) return onlyVehcMsg;
        if (capacity === vehLen) return "Sorry, we're full.";
        vehicles.push(vehicleInstance);
        return "Vehicle added!"
    }
}