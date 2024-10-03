//Prototypes: objects inherit features from one another.
//Create two objects, point and coloredPoint. The point contains the coordinates of its position on the surfaces, while coloredPoint contains only color
let point = {x:0, y:0};
let coloredPoint = {color: "red"};

//Every new object in JS is created by default from generic Object constructor

//One of the properties that each object inherits is the __proto__ field. Let's see what happens when we use this field to connect our two objects
coloredPoint.__proto__ = point;

//Let's try to refer to the property of the coloredPoint object
console.log(Object.getOwnPropertyNames(coloredPoint));
console.log(coloredPoint.color);
console.log(coloredPoint.x);

//The fact that we have access to it is therefore obvious. However, we try, successfully, to read the x field. What happens then? JavaScript does not find a field named x in the coloredPoint object and looks for it in the prototype.

coloredPoint.x = 100;   // new property
console.log(coloredPoint.x);
console.log(point.x);
console.log(Object.getOwnPropertyNames(coloredPoint));

// __proto__ unrecommended way 
//Let’s create a figure object that has one getType method. The method will check if we have a type field in the object, returning either its value or the string "unknown".
figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};
//The second object, circle, contains the properties type, center, and radius
let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
};
//Using __proto__, we assign a figure as the prototype circle.
circle.__proto__ = figure;

//Calling getType method for both objects
console.log(figure.getType()); //unknown
console.log(circle.getType()); //circle
//In this case, JavaScript doesn’t find the getType method directly in circle, so it starts searching the prototype chain.

//Object.setPrototypeOf: allow us to associate the target object with the prototype object.
Object.setPrototypeOf(circle, figure);

//Object.getPrototypeOf: returns the prototype of the indicated object
let proto = Object.getPrototypeOf(circle);
console.log(circle.getType()); //circle

//Object.create: which meant that we created an empty object without a prototype.
let circle2 = Object.create(figure)
circle.type = "circle";
circle.center = {x:0, y:0},
circle.radius = 100;
console.log(circle.getType());

//Constructor
let Square
