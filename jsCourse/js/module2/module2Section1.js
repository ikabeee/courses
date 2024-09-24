/*Declaration Variables
var  height;
console.log(height);  //  ->  undefined
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

let  height; //Must common way to declare a variable because  prevents us from declaring a variable with the same name
console.log(height);  //  ->  undefined

var  height;
var  height;
console.log(height);  //  ->  undefined

let  height;
// let  height;  //  ->  Uncaught  SyntaxError:  Identifier  'height'  has  already  been  declared
console.log(height);

// Initializing Variables
let  height  =  180;
let  anotherHeight  =  height;
let  weight;
console.log(height);  //  ->  180
console.log(anotherHeight);  //  ->  180
weight  =  70;    
console.log(weight);  //  ->  70

let  height  =  180;
console.log(height);  //  ->  180
console.log("height");  //  ->  height Displaying a string

//Declarations and strict mode
height  =  180;
console.log(height);  //  ->  180
//Strict mode
//"use  strict";
   
height  =  180;  //  ->  Uncaught  ReferenceError:  height  is  not  defined
console.log(height);

//Changing variable values
let  steps  =  100;
console.log(steps);  //  ->  100
steps  =  120;  //  ->  120
console.log(steps);
steps  =  steps  +  200;
console.log(steps);  //  ->  320

let  greeting  =  "Hello!";
let  counter  =  100;
console.log(greeting);  //  ->  Hello!
greeting  =  1;
console.log(greeting);  //  ->  1

greeting  =  "Hello!";
//Concatenate
greeting  =  greeting  +  counter;
console.log(greeting);  //  ->  Hello!100

//Constants
const  greeting  =  "Hello!";
const  greeting;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration
greeting  =  "Hello!";
const  greeting  =  "Hello!";
greeting  =  "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable.


//Scope
//Program blocks 

let  counter;
console.log(counter);  //  ->  undefined
{
         counter  =  1;
         console.log(counter);  //  ->  1
}
counter  =  counter  +  1;
console.log(counter);  //  ->  2

//If we declare any variable or constant using let or const, respectively, outside the code blocks, they will be global.
// It will be visible only inside the block in which it was declared and in blocks that can optionally be nested in it

let  height  =  180;
{
         let  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

// Another example

let  height  =  200;
{
         let  weight  =  100;
         {
                 let  info  =  "tall";
                 console.log(height);  //  ->  200
                 console.log(weight);  //  ->  100
                 console.log(info);  //  ->  tall
         }
         console.log(height);  //  ->  200
         console.log(weight);  //  ->  100
         console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
   }
//var The variable declared using it outside the blocks will, as in the case of let, be global, in other words, it will be visible everywhere.

var  height  =  180;
{
         var  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  70

//Functions
function  testFunction()  {
    console.log("Hello");
    console.log("World");
}

// If we declare a variable using the keyword var inside a function, its scope will be limited only to the inside of that function 
var globalGreeting = "Good  ";

function testFunction() {
    var localGreeting = "Morning  ";  // <- Local scope  
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("main  program:");
console.log(globalGreeting);
console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined

// Variable shadowing
let counter = 100;
console.log(counter);  //  ->  100
{
    counter = 200;
    console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  200


let counter = 100;
console.log(counter); // -> 100
{
    let counter = 200; // <-- works as a different variable on the local scope.  the declaration is local (its a different scope than global) and all references to the variable with this name inside the block will refer to this local variable
    console.log(counter); // -> 200
}
console.log(counter); // -> 100 see how doesn't change 

// Shadowing is also present in variable declarations using the word var.
// REMEMBER var it will be visible everywhere
var  counter  =  100;
   
function  testFunction()  {
         var  counter  =  200;    
         console.log(counter);
}
   
console.log(counter);  //  ->  100
testFunction();  //  ->  200
console.log(counter);  //  ->  100


//Hoisting:

var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  Uncaught  ReferenceError:  weight  is  not  defined

var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  undefined
var  weight  =  70;
console.log(weight);    //  ->  70


//Quiz
//Q1
const rosePrice  = 8;
var roseQuantity = 70;
const lilyPrice = 10;
var lilyQuantity = 50;
const tulipPrice = 2;
var tulipQuantity = 120;
var finalPrice = 0;
var pricesList = [];
var totalPrice = 0;

function roseResult(){
    finalPrice = rosePrice * roseQuantity;
    console.log('Rose - Unit price: $' + rosePrice + ", quantity: " + roseQuantity + ", value: $" + finalPrice);
    pricesList.push(finalPrice);
}

function lilyResult(){
    finalPrice = lilyPrice * lilyQuantity;
    console.log('Lily - Unit price: $' + lilyPrice + ", quantity: " + roseQuantity + ", value: $" + finalPrice);
    pricesList.push(finalPrice);
}

function tulipResult(){
    finalPrice = tulipPrice * tulipQuantity;
    console.log('Lily - Unit price: $' + tulipPrice + ", quantity: " + tulipQuantity + ", value: $" + finalPrice);
    pricesList.push(finalPrice);
}

function total(){
    totalPrice = pricesList.reduce((a, b) => a+b, 0);
    console.log("Total of flowers: " + totalPrice);
}

console.log(pricesList);
//Q2
/*
roseQuantity-=50;
lilyQuantity-=20;

roseResult();
lilyResult();
tulipResult();
total();


//LAB Variable

var nameMaxwell = 'Maxwell Wright';
var nameRaja = 'Raja VillaReal';
var nameHelen = 'Helen Richards';

var phoneMaxwell =  '(0191) 719 6495';
var phoneRaja = '0866 398 2895';
var phoneHelen = '0800 1111';

var emailMaxwell = 'libero@convallis.edu';
var emailRaja = 'posuere.vulputate@sed.com';
var emailHelen = 'Curabitur.egestas.nunc@nonummyac.co.uk';

console.log('Name: ' + nameMaxwell + " " +'Phone: '+ phoneMaxwell + " " + 'Email:' + emailMaxwell);
console.log('Name: ' + nameRaja + " " +'Phone: '+ phoneRaja + " " + 'Email:' + emailRaja); 
console.log('Name: ' + nameHelen + " " +'Phone: '+ phoneHelen + " " + 'Email:' + emailHelen); */