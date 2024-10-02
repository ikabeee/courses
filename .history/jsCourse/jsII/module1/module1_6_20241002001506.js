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

//
