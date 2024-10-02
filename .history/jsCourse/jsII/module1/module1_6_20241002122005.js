//References
//We cannot change the value we declared as const
//But you can modify or add props of an object
const contact = {};
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);

//email prop from contact can be deleted too
delete contact.email;
console.log(contact)

//THE CONST OBJECT CAN BE MODIFIED
// "A constant cannot change through re-assignment" and "A constant cannot be re-declared" from JS Documentation
//So const keyword protects only the reference which means it's protecting "contact" reference and we cannot replace another object on "contact"
// However, changes inside an object do not affect the reference
contact.tel = "31312445";
console.log(contact);
delete contact.tel;

//Comparing objects
//in the case of objects in variables and constants, only the references are stored
var point1 = {x: 10, y: 20};
var point2 = {x: 10, y: 20};
console.log(point1 === point2);     // false because they have different address

// What happen if point1 has the same address
let point3 = point1;
console.log(point1===point3); //True  We’ve written the content of point1 into the variable point3 (i.e. in both variables there is a reference to the same object).
//Adding a new prop
point3.z = 40;
console.log(point3.z);    // 40 this result it's because we have stored on point3 the point1 reference
console.log(point1.z);    // 40
console.log(point2.z);    // undefined

//Copying objects (copying references(), cloning, merging)
//Object.assign method
//The method takes the target as the first argument, to which fields fields from other objects will be copied

// Structure: Object.assign(point2(Target object), point0(Source of the properties to be copied)) in the second argument there is no limit to the number of object

//If a property with the same name as the source object already exists in the target object, it will be overwritten with a new value
let point00 = {x:10, y: 20 };
let point01 = point00;    // copy reference
let point02 = {};
Object.assign(point02, point00);  //  copy properties into the new object
console.log(point02.x);
console.log(point02.y);
console.log(point01 === point00); // true
console.log(point01 === point02); // false

//All the properties of each source are copied to the target object, with the objects copied in the order in which they occur as arguments of the Object.assign method (from left to right).
var point03={};
Object.assign(point03, point00, {z: 100});
console.log(point03.z);

//Overwriting properties

var point04 = {};
Object.assign(point04, point03, {z: 200, color: "red"});
console.log(point04.z);    // 200 Note that the z field occurs both in the point3 object (and has a value of 100) and in the object inserted as the last argument (which has a value of 200). As we indicated earlier, in this case, the value from the last, most right-handed argument "wins".

//Object.assign function returns a reference to the targe object that has been modified
//Giving as the first argument an empty object to which we assign the reference to a variable after completing the Object.assign method
let star0= {x:10, y: 20 };
let star2 = Object.assign({}, star0);
let star3 = Object.assign({}, star0, {z: 100});

//spreed operator {...}
let shoes0 = {x:10, y: 20 };
let shoes2 = { ...shoes0}; //Copying shoes0 to shoes2 
let shoes3 = { ...shoes0, z: 100}; //Copying shoes0 to shoes2  and adding a new prop
console.log(shoes2, shoes3);
// ... the three dots preceding the object cause it to be spread out individual fields
let shoes4= { ...shoes3, ...{z: 200, color: "red"}};
console.log(shoes4)
//Same effect

let shoes5 = { ...shoes3, z: 200, color: "red"};
console.log(shoes5);

//However, the actions presented have a certain limitation – they all represent shallow cloning.If there is shallow, then as you can guess, there should also be deep cloning.

//Shallow cloning does not copy nested objects, operating only on their references
console.log("Shallow");
let circle1 = {
    radius: 100,
    center: {
        x: 100,
        y: 100
    }};
let circle2 = {...circle1}; //IS copied "shallow". copies only the reference to new circle2 object
circle1.radius = 200;
circle1.center.x = 200;
console.log(circle2.radius);
console.log(circle2.center.x);
console.log(circle1 === circle2); // false The change in point1 is not visible in point3
console.log(circle1.center === circle2.center); // true !

//Deep cloning
//
let deepClone = function(obj) {
    let newObj = {...obj};
    //the function that we write will check the types of all properties of the copied object. 
    for(property in newObj) {
        //If a property turns out to be an object, the same function will be called for it again (so we use recursion). 
        if(typeof newObj[property] === "object") {
            //Recurs
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
}
