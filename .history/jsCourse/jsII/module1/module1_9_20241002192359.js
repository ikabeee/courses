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



