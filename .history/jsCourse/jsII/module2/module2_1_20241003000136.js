//Class declaration
let Vehicle = function(initialData){ //Constructor
     //The constructor accepts this object as the initialData parameter and decomposes it into individual fields
    //the local variables id, latitude, and longitude are declared;the properties with the same names are found in the initialData object;the values of these properties are assigned to the local variables that have just been created.
    
    this.setPosition = function(latitude, longitude) {//setting properties of position. Its a method and constructor of setPosition
        this.time=Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    //getPosition method which works as constructor too
    this.getPosition = function() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
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
