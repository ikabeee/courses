//Properties
//Properties can be treated in exactly the same way as variables
let test = {
    nr: 10,               // Number
    b: false, // Boolean
    str: "uno dos tres", // String
    arr: [10, 20, 30], // Array
    obj: { //Object
        x: 10, 
        y: 20
    }, 
fn: function(arg) {
    console.log(arg)
} //Methods 
};
test.fn(123);

//Nested properties
// If the property of an object is another object that has properties itself thats we called nested properties

console.log(test.obj.x); //--> obj is the property of "test" which also its an object who have properties like "x"

// A function as a property type - a method
// Functions are properties of a object which is a method according to OOP

let point = {
    x: 0, //--> Properties
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance;
    },
    moveVertically: function(distance) { //-->Methods
        this.y = this.y + distance; //--> "this." indicates the object we are in
    }
}
console.log(point.x);    // -> 0
point.moveHorizontally(30);
console.log(point.x);    // -> 30

//Adding a new property
let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
// We
contact.firstName = "Ronald";
contact.lastName = "Murphy";
console.log(contact.tel);   // -> 207-662-5412
console.log(contact.firstName);     // -> Ronald
