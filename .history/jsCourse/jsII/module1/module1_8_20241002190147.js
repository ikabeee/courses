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
    enumerable: false, //-> this is the reason that we can't see anything on line 26
    configurable: true
});
//We have added the _age property to an empty contact object, marking it not to be enumerable. And it really isn't – calling Object.keys won't return it.
console.log(Object.keys(contactPropDesc));

console.log(contactPropDesc._age);
//COnfiguring _gaRead only 
Object.defineProperty(contact, "_age", {
    value: contact._age,
    writable: false,
    enumerable: false,
    configurable: true
});
contact._age = 100;
console.log(contact._age);
