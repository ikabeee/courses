//Methods
//A method its a function of an object
let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType: function() { //Method 
        return "circle";
    }
};

//Or you can declarate a method like this

let circle2 = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType() { //Method  simplest way 
        return "circle";
    }
};


//Calling a method
//We use dot notation
