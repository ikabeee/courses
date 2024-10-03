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
