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

// __proto__

//