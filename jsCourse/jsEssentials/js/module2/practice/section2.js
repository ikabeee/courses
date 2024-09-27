//q1
var bl1= true;
var bl2 = Boolean(true);

var number = 10;
var number2 = Number(10);

var bigInt = 40n;
var bigInt2 = BigInt(40);

var string = 'Hello';
var string2 = String('Hello');

//q2 Interpolation
console.log(`${bl1} [${typeof bl1}]`);;
console.log(`${bl2} [${typeof bl2}]`);
console.log(`${number} [${typeof number}]`);
console.log(`${number2} [${typeof number2}]`);
console.log(`${bigInt} [${typeof bigInt}]`);
console.log(`${bigInt2} [${typeof bigInt2}]`);
console.log(`${string} [${typeof string}]`);
console.log(`${string2} [${typeof string2}]`);

//Q3
var string = '1234';
var number = Number(string);
var bigInt = BigInt(number);
var bool = Boolean(bigInt);

console.log(`${b} [${typeof b}]`);

//or

var b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

//Q4
let b = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`); // !!! number 
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // !!! number

//Q5

let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]

//Q6

const str1 = 42 + +"1";