//Section 2: Data types and type Casing

//Typeof operator: informs us of the type of data indicated as a given argument.
/*
let  year  =  1990;
console.log(typeof  year);  //  ->  number
console.log(typeof  1991);  //  ->  number
   
let  name  =  "Alice";
console.log(typeof  name);  //  ->  string
console.log(typeof  "Bob");  //  ->  string
   
let  typeOfYear  =  typeof  year;
console.log(typeOfYear);  //  ->  number
console.log(typeof  typeOfYear);  //  ->  string

//Primitive data types
//Boolean
let  isDataValid  =  true;
let  isStringTooLong  =  false;
let  isGameOver  =  false;
continueLoop  =  true;
   
console.log(false);  //  ->  false
console.log(typeof  false);  //  ->  boolean
console.log(isDataValid);  //  ->  true
console.log(typeof  isDataValid);  //  ->  boolean


//Number: Represents both real numbers (e.g. fractions) and integers.
const  year  =  1991;
let  delayInSeconds  =  0.00016;
let  area  =  (16  *  3.14);
let  halfArea  =  area  /  2;
   
console.log(year);  //  ->  1991;
console.log(typeof  year);  //  ->  number;

//decimal, hexadecimal, octal, binary 

let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
   
console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  

//Exponential form

let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123


let  a  =  1  /  0;
let  b  =  -Infinity;
   
console.log(a);  //  ->  Infinity = Same as maths subjects
console.log(b);  //  ->  -Infinity = Same as maths subjects
console.log(typeof  a);  //  ->  number
console.log(typeof  b);  //  ->  number
   
let  s  =  "it's  definitely  not  a  number";
let  n  =  s  *  10;
console.log(n);  //  ->  NaN = could not be performed because the argument is either not a number, or cannot be converted to a number.
console.log(typeof  n);  //  ->  number

//BigInt = allows us to write integers of virtually any length and they're numbers with ...n suffix

let  big  =  1234567890000000000000n;
let  big2  =  1n;
   
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
   
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n

//You cannot use other types in arithmetic operations on BigInts,
let  big3  =  1000n  +  20;  //  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions


// Strings = sequence of characters forming a piece of text

let  country  =  "Malawi"; // <-- quotation marks to indicate that a given text is to be treated as a string
let  continent  =  'Africa';
   
console.log(country);  //  ->  Malawi
console.log(typeof  country);  //  ->  string
console.log(continent);  //  ->  Africa
console.log(typeof  continent);  //  ->  string

//Backslash

let  message1  =  'The  vessel  \'Mars\'  called  at  the  port.';
let  message2  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius."; // <-- A quote mark preceded by the \ (backslash) character will be interpreted as ordinary characters that are part of our string, not parts of a literal construction.
   
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
let  path  =  "C:\\Windows";
console.log(path);  //  ->  C:\Windows

//Arithmetic ops with strings. Arithmetic operators -, *, or \, the JavaScript interpreter tries to interpret the given values as numbers, or convert them into numbers.
let  path  =  "C:\\Windows"  -  "Windows";
console.log(path);  //  ->  NaN
   
let  test  =  "100"  -  "10";
console.log(test);  //  ->  90
console.log(typeof  test);  //  ->  number

//Exception with addition operator which will not be treated as an arithmetic one, but as an attempt to create a new string by combining two input strings

let  path  =  "C:\\"  +  "Windows";
console.log(path);  //  ->  C:\Windows
   
let  test  =  "100"  +  "10";
console.log(test);  //  ->  10010
console.log(typeof  test);  //  ->  string

// String interpolation. allows you to treat a character string as a template

let  country  =  "Malawi";
let  continent  =  "Africa";
   
let  sentence  =  `  ${country}  is  located  in  ${continent}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.

//Calling methods of an object

console.time(); //console is an object and time its the method
console.log("test  console");  //  ->  test  console.  Here is the same case. console (Object) ".log" is a method
console.timeEnd();  //  ->  default:  0.108154296875  ms
*/

// Autoboxing: If a dot appears after a literal representing a primitive type, or after a variable containing this type of data, the JavaScript interpreter tries to treat this value as an object and not a primitive. 
let  river  =  "Mekong";
let  character  =  river.charAt(2); // charAt(index) = returns the number of characters in a string;S
console.log(character);  //  ->  k

/*
.charAt(index): Returns the character at the "index" position in the string (indexes start from 0) 

.length: returns the number of characters in a string 

.slice(beginIndex, [optional] endIndex): Returns a new string that is created from the characters between beginIndex (included) and endIndex (excluded); if endIndex is omitted, then the new string is from beginIndex to the end of the string 

.split(separator, [optional] limit): splits the string into substrings whenever a separator is found in that string, and returns an array of those substrings  


let  str  =  "java  script  language";
   
console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4
   
console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'
   
console.log(str.slice(0,  4));  //  ->  'java'
console.log('test'.slice(1,  3));  //  ->  'es'
   
console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']

// Undefined: It’s the default value that all variables have after a declaration if no value is assigned to them
// null: used to indicate that the variable does not contain anything
//typeof null is equal to "object".

let  someResource;
console.log(someResource);  //  ->  undefined
console.log(typeof  someResource);  //  ->  undefined
   
someResource  =  null;
console.log(someResource);  //  ->  null
console.log(typeof  someResource);  //  ->  object

//Type conversions

const  str  =  String(); // default create and return an empty string – primitive ""
const  num  =  Number(); // default create and return the value 0
const  bool  =  Boolean(); // default create and return the value of false
   
console.log(str);  //  ->
console.log(num);  //  ->  0
console.log(bool);  //  ->  false
   
const  big1  =  BigInt(42); // Requires you to pass some initial value to it
console.log(big1);  //  ->  42n
   
const  big2  =  BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

// Conversions
Const  num  =  42;
   
const  strFromNum1  =  String(num);
const  strFromNum2  =  String(8);
const  strFromBool  =  String(true);
const  numFromStr  =  Number("312");
const  boolFromNumber  =  Boolean(0);

// Conversion to string

let  str  =  "text";
let  strStr  =  String(str);
console.log(`${typeof  str}  :  ${str}`);  //  ->  string  :  text
console.log(`${typeof  strStr}  :  ${strStr}`);  //  ->  string  :  text
   
let  nr  =  42;
let  strNr  =  String(nr);
console.log(`${typeof  nr}  :  ${nr}`);  //  ->  number  :  42
console.log(`${typeof  strNr}  :  ${strNr}`);  //  ->  string  :  42
   
let  bl  =  true;
let  strBl  =  String(bl);
console.log(`${typeof  bl}  :  ${bl}`);  //  ->  boolean  :  true
console.log(`${typeof  strBl}  :  ${strBl}`);  //  ->  string  :  true
   
let  bnr  =  123n;
let  strBnr  =  String(bnr);
console.log(`${typeof  bnr}  :  ${bnr}`);  //  ->  bigint  :  123
console.log(`${typeof  strBnr}  :  ${strBnr}`);  //  ->  string  :  123
   
let  un  =  undefined;
let  strUn  =  String(un);
console.log(`${typeof  un}  :  ${un}`);  //  ->  undefined  :  undefined
console.log(`${typeof  strUn}  :  ${strUn}`);  //  ->  string  :  undefined
   
let  n  =  null;
let  strN  =  String(n);
console.log(`${typeof  n}  :  ${n}`);  //  ->  object  :  null
console.log(`${typeof  strN}  :  ${strN}`);  //  ->  string  :  null

//Conversion to number

console.log(Number(42));  //  ->  42
   
console.log(Number("11"));  //  ->  11
console.log(Number("0x11"));  //  ->  17
console.log(Number("0o11"));  //  ->  9
console.log(Number("0b11"));  //  ->  3
console.log(Number("12e3"));  //    ->  12000
console.log(Number("Infinity"));//  ->  Infinity
console.log(Number("text"));  //  ->  NaN not a number
   
console.log(Number(14n));  //  ->  14
console.log(Number(123456789123456789123n));  //  -  >    123456789123
456800000
   
console.log(Number(true));  //  ->  1
console.log(Number(false));  //  ->  0
   
console.log(Number(undefined));  //    ->  NaN not a number
   
console.log(Number(null));//  ->  0

//Conversion to boolean
/*The value false is alway returned for:
0,
NaN,
empty string,
undefined,
null


console.log(Boolean(true));  //  ->  true
   
console.log(Boolean(42));  //  ->  true
console.log(Boolean(0));  //  ->  false
console.log(Boolean(NaN));  //  ->  false
   
console.log(Boolean("text"));  //  ->  true
console.log(Boolean(""));  //  ->  false
   
console.log(Boolean(undefined));  //  ->  false
   
console.log(Boolean(null));  //  ->  false

//Implicit conversion
const  str1  =  42  +  "1";
console.log(str1);                //  ->  421
console.log(typeof  str1);  //  ->  string
   
const  str2  =  42  -  "1";
console.log(str2);                //  ->  41
console.log(typeof  str2);  //  ->  number

*/






