//Class declaration
let Vehicle = function(initialData){ //Constructor
    let {id, latitude, lo}
    this.setPosition = function(latitude, longitude) {//setting properties of position. Its a method and constructor of setPosition
        this.time=Date.now();
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
