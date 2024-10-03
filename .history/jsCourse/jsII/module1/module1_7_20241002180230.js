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
let circleThis = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return typeof this.radius === "number" ? "circle" : "unknown" ;
    }
};
console.log(circle.getType());
let figure = {...circle};
delete circle.radius;
console.log(figure.radius);
console.log(figure.getType()); // "circle"

//Function arrows 
let add = (a,b) => a+b;

//this inside nested objects
let circleNest = {
    radius: 100,
    center: {
        x:0,
        y:0,
        show(){console.log(`${this.x}, ${this.y}`)}
    }
}
circleNest.center.show();

//Getters and setters

/*
we declare them using the keywords set and get;
the setter method must take exactly one argument;
the getter method cannot accept any argument;
these methods are seen as ordinary properties with the name of the method;
setter and getter methods are not called as functions, they are used to assign a value to a property (setter) or to take a value from a property (getter)
there may be a pair of setter and getter of the same name, and it will be treated as a property with read and write capabilities.
*/

let contact = {
    _tel: "207-662-5412",
    get tel() {return this._tel;}
};
console.log(contact.tel);
contact.tel = "100-100-1000";
console.log(contact.tel);
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);

let contact = {
    _tel: "207-662-5412",
    get tel() {return this._tel;},
    set tel(t) { this._tel = t;}
};
console.log(contact.tel);
contact.tel = "100-100-1000";
console.log(contact.tel);
