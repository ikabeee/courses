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
//So const keyword 