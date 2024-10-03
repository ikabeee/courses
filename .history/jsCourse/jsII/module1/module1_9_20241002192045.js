//Other ways to create objects
//Factory:  functions that create and return objects.

//We create a function that will return a new object of our defined type every time it is called. We can pass arguments to a function that will be used to initiate the new object.
let createPoint  = function(x, y) {
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};
let point1 = createPoint(1,1);
let point2 = createPoint(2,2);
console.log(point1.x); // ->  1
console.log(point2.x); // -> 2
