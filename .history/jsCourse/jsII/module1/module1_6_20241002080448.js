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
let point01 = point0;    // copy reference
let point2 = {};
Object.assign(point2, point0);  //  copy properties into the new object
console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0); // true
console.log(point1 === point2); // false


