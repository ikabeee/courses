//property Configuration
let contact = {
    _age: 36,
    firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}
};
let keys = Object.keys(contact);
console.log(keys); //An array "show", "_age", "firstName", "lastName", "lastName", "fullName", "age"] will be assigned to the keys variable, containing all the keys (property names) of the contact object.

//Object.getOwnPropertyName: This method allows us to retrieve information about the indicated property of the selected object.
let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
console.log(desc); //describing the attributes of firstName property

//This method is used to create a new object property, but it can also be used to modify an existing property.
let contactPropDesc = {};
//Creating a new prop and configuring
Object.defineProperty(contactPropDesc, "_age", {
    value: 36,
    writable: true,
    enumerable: false,
    configurable: true
});
let test=Object.keys(contactPropDesc);

console.log(contactPropDesc._age);
