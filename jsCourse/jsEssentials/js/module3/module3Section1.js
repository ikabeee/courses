// Unary arithmetic operators

let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";
 
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number


//Unary increment and decrement operators
n1 = 10;
n2 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

n3 = 20;
n4 = 20;

console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 19

console.log(n4); // -> 20
console.log(--n4); // -> 19
console.log(n4); // -> 19

//Compound Assignment Operators

let x = 10;
 
x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4

//Logical operators
//AND
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false
//OR
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false
//NOT
console.log(!true); // -> false
console.log(!false); // -> true

const a = false;
const b = true;
const c = false;
const d = true;
 
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false

// Logical operators and non-Boolean values
let nr = 0;
let year = 1970;
var name = "Alice";
let empty = "";
 
console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true
 
console.log(!!nr); // -> false
console.log(!!name); // -> true

//They don't return a Boolean value. In reality, they return its first or second operand. The AND operator will return the first operand if it evaluates to false, and the second operand otherwise. The OR operator will return its first operand if it evaluates to true, and the second operand otherwise.

console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string
 
 
console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

//Compound Assigment (Works similar to artihmetic) 
// a&&=false -> Its equal to a= a && false 
let t = false;
console.log(t); // -> false
t ||= true;
console.log(t); // -> true

//Strings Operators
//Concatenation 
let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice
 
let sentence = "Happy New Year ";
let newSentence = sentence + 10191;
 
console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string

sentence = "Happy New ";
sentence += "Year ";
sentence += 10191;
console.log(sentence); // -> Happy New Year 10191

//Comparison operators
//=== Strict equality
console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

//== equality

console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false

// != inequality !=== nonidentity
console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 !=  false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true

//Smaller than < or equal <=. Bigger than > or equal  >=

console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true
 
console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true
 
console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true

console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true
 
console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true
 
console.log("ab" < "ab4"); // -> true

//typeof
year = 10191;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean

//instanceof
names = ["Patti", "Bob"];
var name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false

//delete allows you to delete a selected field of the object whose name is indicated with an operand

let user = {
    name: "Alice",
    age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined

//ternary Si la condición se evalúa como verdadera, se retorna valor_si_verdadero; si es falsa, se retorna valor_si_falso. 
let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob
//its the same function

if (1>2){
    console.log('Alice');
}else{
    console.log('Bob');
};

//Precedence: 
a = 10;
b = a + 2 * 3;
c = a + 2  < 20 - 15;
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> false
 
a = 10;
b = a + 2 * 3;
c = a + 2  < 20 - 15;
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> false

//Dialog user
//alert dialog box
alert("Hello, World!")
window.alert("Hello, World! for the second time");
 
alert(4 * 7);
alert(true);
 
alert("text 1", "text 2"); // only "text 1" will be displayed

//window.confirm(): displays two buttons, the OK button and the Cancel button. Depending on the button pressed by the user, the confirm method returns a Boolean value. True is returned when the user closes the dialog box using the OK button, and false is returned when the user presses the Cancel button
let decision = window.confirm("Is it OK?");
console.log(decision);

let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled"
 
console.log(message);

//prompt()
let name = window.prompt("What is your name?", "John Doe");
name = name ? name : "anonymous";
 
let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");
