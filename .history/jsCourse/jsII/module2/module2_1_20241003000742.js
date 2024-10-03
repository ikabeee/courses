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
let Vehicle2 = function({id, latitude, longitude}){
    this.setPosition = function({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.getPosition = function() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    this.id = id;
    this.status = "unavailable";
    this.setPosition({latitude, longitude});
};
let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
