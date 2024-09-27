//1.1 Section 1  - What is an object?
//1.1.1 Primitive data types

console.log(typeof 2.5); // -> number
console.log(typeof "one two three"); // -> string
console.log(typeof false); // -> boolean


//Values can placed in variables - We can store them or perform actions on them
let nr = 2.5;
nr = nr / 2;
console.log (typeof nr); //-> number

//Array as a complex a complex type
/
let a = [10, 20, "en to tre", true, 50];
a[4] = a[4] * 2;
console.log(a[0]);    // -> 10
console.log(a[2]);    // -> en to tre
console.log(a[4]);    // -> 100
