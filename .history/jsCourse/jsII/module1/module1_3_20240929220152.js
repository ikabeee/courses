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
    console.log(arg)} //Methods 
};
test.fn(123);