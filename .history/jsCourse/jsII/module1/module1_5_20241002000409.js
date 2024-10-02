//Property existence test and property enumeration
//If you try to read a non-existent property, the undefined value will be returned
let contact = {};
if(contact.notes){ //if different then undefined. 
    console.log(contact.notes); 
}
    
//In most cases, it won't matter to us whether a field does or doesn't exist, or simply has no value assigned to it
//Both case are handled in the same way, with a new value being assigned to the property (if the field doesn't exist, it will automatically be created)
if(!contact.notes) { // if undefined (check !)
    contact.notes = "something really important";
    console.log(contact.notes);
}

delete contact.notes;

//Good practice! to test if a given object exist before trying to read it.
console.log(contact.notes); // -> undefined

//If we try to refer to a non-existent field, which seems to contain the nested work and private fields, the consequences will be sightly more serious
//console.log(contact.email.private); // exception!

//JS engine will try to find the private field in the object, which is... undefined. This will end up throwing out an exception, which if not handled with the try...catch, will terminate our program

//Ways to protect our program
if(contact && contact.email){ //Verifying if we have email property
    console.log(contact.email.private);
}

//or we can try this too

contact && contact.email && console.log(contact.email.private);

//Existence test using "in"
//If the field exist, its returned true even if the field has no set value
if ("notes" in contact){
    console.log(contact.notes);
}

//Enumeration "for...in"
//Using for...in, we can go through the properties of an object
let person = {
    tel: "91312312312",
    email: "test@gmail.com"
};

for (x in person){
    //Property name
    console.log(x);
    //Property value
    console.log(person[x]);
    //Printing key and value
    console.log(`${x} : ${person[x]}`);
    //Printing kye, value and type of variable
    console.log(`${x} : ${person[x]} : ${typeof person[x]}`);
};

//The object.keys method
// Retrieve the name of all objects props is to use the "Object.keys" method
//This method returns an array of property names, which we can use in any way we want

