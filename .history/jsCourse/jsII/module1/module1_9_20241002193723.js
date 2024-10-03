//Other ways to create objects
//Factory:  functions that create and return objects.

//We create a function that will return a new object of our defined type every time it is called. We can pass arguments to a function that will be used to initiate the new object.
let createPoint  = function(x, y) { //factory
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};
let point1 = createPoint(1,1);
let point2 = createPoint(2,2);
console.log(point1.x); // ->  1
console.log(point2.x); // -> 2

//Even simpler

let createPointTest  = function(x, y) {
    return {
        x:x,
        y:y
    }
};

//Even more simpler

let createPointTestS  = function(x, y) {
    return {
        x,
        y
    }
};

//Arrow notation

let arrowObj  = (x, y) => ({x, y});


let createColoredPoint  = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    return {
        x,
        y,
        getColor() {return _color}
    }
};
let coloredPoint1 = createColoredPoint (1, 1, "red");// -> ... object under construction
let coloredPoint2 = createColoredPoint (2, 2, "green");// -> ... object under construction 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!


//The constructor and the new keyboard
//constructor: function that creates and returns an object.
//it requires the use of the keyword new when creating a new object. Additionally, it implicitly performs some actions that we have taken in the factory explicitly
let ColoredPoint = function(x, y, color) { //constructor. In the constructor, this is not necessary, after running it with new, it will automatically return an implicitly created object
    let _info = "... object under construction";
    let _color = color; //saving color on _color
    console.log(_info);
    //We have access to this implicitly created object in the constructor using the keyword this. With this, we define and initiate the properties of the new object
    this.x = x;
    this.y = y;
    this.getColor = function() {return _color};
};
let coloredPoint1 = new ColoredPoint(1, 1, "red"); //   Constructor names begin with capital letters
let coloredPoint2 = new ColoredPoint(2, 2, "green"); 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!

console.log(ColoredPoint.constructor.name);

