//Prototypes
//Create two objects, point and coloredPoint. The point contains the coordinates of its position on the surfaces, while coloredPoint contains only color
let point = {x:0, y:0};
let coloredPoint = {color: "red"};

//Every new object in JS is created by default from generic Object constructor

//One of the properties that each object inherits is the __proto__ field. Let's see what happens when we use this field to connect our two objects
coloredPoint.__proto__ = point;
console.log(coloredPoint.)