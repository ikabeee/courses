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
//We use dot notation, We point to the object, name the method and then add a parenthesis
console.log(circle.getType());
//Using bracket notation
console.log(circle["getType"]() );

//this Keyboard contain a reference to the object we are in. We'll use it inside the methods to refer to the property of the object in which method is located


// keyboard this is not only applicable to objects




