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
console.log(keys);
//An array "show", "_age", "firstName", "lastName", "lastName", "fullName", "age"] will be assigned to the keys variable, containing all the keys (property names) of the contact object.