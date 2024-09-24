//Data types

//Complex data types

//Object:  collection of named fields.
let  testObj1  =  {};
console.log(typeof  testObj);  //  ->  object

let  testObj  =  {
	nr:  600,
	str:  "text"        //<-- Attributes
};

console.log(testObj.nr);  //  ->  600
console.log(testObj.str);  //  ->  text

//Objects examples

let  user1  =  {
    name:  "Calvin",
    surname:  "Hart",
    age:  66,
    email:  "CalvinMHart@teleworm.us"
};

let  user2  =  {
    name:  "Mateus",
    surname:  "Pinto",
    age:  21,
    email:  "MateusPinto@dayrep.com"
};

//Calling attributes from objects

console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus
   
console.log(user1.age);  //  ->  66
user1.age  =  67;
console.log(user1.age);  //  ->  67
   
console.log(user2.phone);  //  ->  undefined
user2.phone  =  "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557

//Deleting fields to an existing object

console.log(user2.phone);  //  ->  904-399-7557
delete  user2.phone; //<-- Deleting phone field from user2
console.log(user2.phone);  //  ->  undefined

//Array: Complex data type that can be used to store a data collection
let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri
   
days[0]  =  "Sunday";
console.log(days[0]);  //  ->  Sunday
   
let  emptyArray  =  [];
console.log(emptyArray[0]);  //  ->  undefined

//Empty index
let  animals  =  [];
console.log(animals[0]);  //  ->  undefined
   
animals[0]  =  "dog";
animals[2]  =  "cat";
   
console.log(animals[0]);  //  ->  dog
console.log(animals[1]);  //  ->  undefined
console.log(animals[2]);  //  ->  cat

//Array with different data types

let  values  =  ["Test",  7,  12.3,  false];

// Storing arrays in arrays

let  names  =  [["Olivia",  "Emma",  "Mia",  "Sofia"],  ["William",  "James",  "Daniel"]]; //Look that we have two arrays inside of one
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James
   
let  femaleNames  =  names[0];
console.log(femaleNames[0]);  //  ->  Olivia
console.log(femaleNames[2]);  //  ->  Mia

// Storing object in arrays
let  users  =[  
    //Object 1
    {
            name:  "Calvin",
            surname:  "Hart",
            age:  66,
            email:  "CalvinMHart@teleworm.us"
    },
    //Object 2
    {
            name:  "Mateus",
            surname:  "Pinto",
            age:  21,
            email:  "MateusPinto@dayrep.com"
    }
];

console.log(users[0].name);  //  ->  Calvin
console.log(users[1].age);  //  ->  21

//Adding a new object on arrays

users[2]  =  {
    name:  "Irene",
    surname:  "Purnell",
    age:  32,
    email:  "IreneHPurnell@rhyta.com"

}

console.log(users[0].name);  //  ->  Calvin
console.log(users[1].name);  //  ->  Mateus
console.log(users[2].name);  //  ->  Irene

//Arrays are also treated as a special kind of object. Example:
let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
let  day  =  "Sunday";
   
console.log(typeof  days);  //  ->  object
console.log(typeof  day);  //  ->  string
   
console.log(days  instanceof  Array);  //  ->  true we can have an instances from arrays because is treated as an object
console.log(day  instanceof  Array);  //  ->  false its only a variable

//.length
let  names2    =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names2.length);  //  ->  4
   
names[5]  =  "Amelia";
console.log(names2.length);  //  ->  6
   
console.log(names2);  //  ->  ["Olivia",  "Emma",  "Mateo",  "Samuel",  undefined,  "Amelia"]
console.log(names2[3]);  //  ->  Samuel
console.log(names2[4]);  //  ->  undefined
console.log(names2[5]);  //  ->  Amelia

//.indexof:  search the array to locate a given value
console.log(names.indexOf("Mateo"));  //  ->  2
console.log(names.indexOf("Victor"));  //  ->  -1

//.push(data): places the element given as its argument at the end of the array
let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
names.push("Amelia");
console.log(names);  //  -  >  ["Olivia",  "Emma",  "Mateo",  "Samuel",  "Amelia"]

//.unshift:  added to the beginning of the array.
names.unshift('Lidia');
console.log(names)// -> ["Lidia", "Olivia", "Emma", "Mateo", "Samuel", "Amelia"]

//.pop(): remove the last element from the array.
names.pop();
console.log(names); // ->["Lidia", "Olivia", "Emma", "Mateo", "Samuel"]

//.shift() remove the element from the beginning of the array 

names.shift();
console.log(names); //  ->  ["Olivia", "Emma", "Mateo", "Samuel"]

//.reverse() reverses the order of elements in the array

names.reverse();
console.log(names); // ->  ["Samuel", "Mateo", "Emma", "Olivia"]

//.slice(Beggining Index, [optional] end index) create a new array from selected elements of the original array
var n1=names.slice(2); // -> ["Mateo", "Samuel"]
var n2=names.slice(1,3); // -> ["Emma", "Mateo"]
var n3=names.slice(0,-1); // -> ["Olivia", "Emma", "Mateo"]
var n4=names.slice(-1); // -> ["Samuel"]

//.concat(arrayName);

let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
let  otherNames  =  ["William",  "Jane"];
let  allNames  =  names.concat(otherNames);
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]
console.log(otherNames);  //  ->  ["William",  "Jane"]
console.log(allNames);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel",  "William",  "Jane"]



