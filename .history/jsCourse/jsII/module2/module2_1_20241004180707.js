//Class declaration
let Vehicle = function (initialData) { //Constructor and Initial Data it's an object which contains id, latitude and longitude
    let { id, latitude, longitude } = initialData; //The constructor accepts this object as the initialData parameter and decomposes it into individual fields
    //the local variables id, latitude, and longitude are declared;the properties with the same names are found in the initialData object;the values of these properties are assigned to the local variables that have just been created.

    this.setPosition = function (latitude, longitude) {//setting properties of position. Its a method and constructor of setPosition
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    //Props
    this.id = id;
    this.status = "unavailable";
    this.time = Date.now();
    //Recursion 
    this.setPosition(latitude, longitude); //initiation stage.
};

let vehicle1 = new Vehicle("AL1024", 59.358615, 17.947589);
vehicle1.setPosition(59.367647, 18.213451);
console.log(vehicle1);

//Another way to create classes
let Vehicle2 = function ({ id, latitude, longitude }) { //constructor
    this.setPosition = function ({ latitude, longitude }) { //setting props with a constructor method
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.getPosition = function () { //getting props information with a constructor method
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    //props
    this.id = id;
    this.status = "unavailable";
    this.setPosition({ latitude, longitude });//initiation stage.
};
let vehicle01 = new Vehicle2({ id: "AL1024", latitude: 59.367647, longitude: 18.213451 });
let vehicle02 = new Vehicle2({ longitude: 18.213423, latitude: 59.367628, id: "AL1024" });

//simplest form class declaration 
class EmptyClass { };
let emptyObject = new EmptyClass; //Creating a new object

class AlmostEmptyClass {
    constructor(sth) { //Each class should have a constructor, that is, a function that will be called when creating a new object on its basis.
        console.log(sth);
    };
    sayHi() { //Method
        console.log("Hi!");
    };
};

let almostEmptyObject = new AlmostEmptyClass(120); // -> 120
almostEmptyObject.sayHi(); // -> Hi!

class VehicleClass { //We declared a class
    constructor({ id, latitude, longitude }) { //constructor
        this.setPosition = function ({ latitude, longitude }) {
            this.time = Date.now();
            this.longitude = longitude;
            this.latitude = latitude;
        };
        this.getPosition - function () {
            return {
                latitude: this.latitude,
                longitude: this.longitude
            };
        }; //Methods getPosition and getPosition are unnecessarily declared inside the constructor
        //props
        this.id = id;
        this.status = 'unavailable';
        this.setPosition({ latitude, longitude }); //Initiation stage.
    };
};
//creating object
let vehicle5 = new VehicleClass({ id: "AL1024", latitude: 59.367647, longitude: 18.213451 });
let vehicle4 = new Vehicle({ longitude: 18.213423, latitude: 59.367628, id: "AL1024" });

//Lets improve our code

class VehicleTwo {
    constructor({id, latitude, longitude}){
        //props
        this.id = id;
        this.status = "unavailable";
        //method
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
};
//Creating objects
let vehicle = new VehicleTwo({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
//Setting positions to vehicle
vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
//getting position
console.log(vehicle.getPosition());


